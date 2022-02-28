from typing import List

from fastapi import HTTPException, Request, Response, status
from sqlalchemy.orm import Session

from .. import models, schemas

# def get_product_by_category(db:Session):
# def get_product_by_ingredient(db:Session):


def get_product_by_keyword(db: Session, request: schemas.SearchKeyword):
    search_keyword = request.keyword
    search = "%{}%".format(search_keyword)
    product_list = (
        db.query(models.Dummy).filter(models.Dummy.keyword.like(search)).all()
    )
    return product_list
