from typing import List

from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session

from database import get_db

from .. import schemas
from ..repository import search

router = APIRouter(
    prefix="/search",
    tags=["searches"],
)


@router.post("/category", response_model=List[schemas.ProductList])
def search_category(request: schemas.SearchCategory, db: Session = Depends(get_db)):
    return search.get_product_by_category(db, request)


@router.post("/keyword", response_model=List[schemas.SearchResult])
def search_keyword(request: schemas.SearchKeyword, db: Session = Depends(get_db)):
    return search.get_product_by_keyword(db, request)


@router.get("/ingredient", response_model=List[schemas.ProductList])
def search_ingredient(
    request: schemas.SearchIngredients, db: Session = Depends(get_db)
):
    return search.get_product_by_ingredient(db, request)
