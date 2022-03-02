from typing import List

from fastapi import HTTPException, Request, Response, status
from sqlalchemy.orm import Session

from .. import models, schemas


def get_product_by_id(db: Session):
    product_detail = db.query(models.Dummy).filter(models.Dummy.id == id).first()
    return product_detail
