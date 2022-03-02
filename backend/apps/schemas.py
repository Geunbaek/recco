from typing import List, Optional

from pydantic import BaseModel


class IngredientBase(BaseModel):
    ko_ingredient: Optional[str] = None
    en_ingredient: Optional[str] = None


class Ingredient(IngredientBase):
    id: int

    class Config:
        orm_mode = True


class ReviewBase(BaseModel):
    user_name: str
    user_age: int
    user_type: str
    user_sex: str
    user_evaluate: int
    review: str


class Review(ReviewBase):
    id: int
    product_num: int

    class Config:
        orm_mode = True


# class DescripBase(BaseModel):
#     color_type: str
#     cost: int
#     category: str
#     product_category_large: str
#     product_category_middle: str
#     product_category_small: str


# class Descrip(DescripBase):
#     id: int
#     product_num: id

#     class Config:
#         orm_mode = True


class ProductsBase(BaseModel):
    name: str
    img_url: Optional[str] = None
    brand: str
    average_rating: Optional[float] = 0
    price: Optional[float] = "N/A"
    extinction: Optional[bool] = False


class ProductList(BaseModel):
    id: int
    name: str
    img: str
    brand: str
    rating: str
    price: str
    ingredients: str

    # totalPageCount: int
    # currnetPage: int

    class Config:
        orm_mode = True


# class Products(ProductsBase):
#     product_num: int

#     descriptions: Descrip
#     ingredients: Optional[List[Ingredient]] = None
#     reviews: Optional[List[Review]] = None

#     class Config:
#         orm_mode = True


class SearchKeyword(BaseModel):
    keyword: str
    searchResultType: str
    requestPage: int
    maxItemCountByPage: int


class SearchCategory(BaseModel):
    largeCategory: str
    smallCategory: str
    requestPage: int
    maxItemCountByPage: int


class SearchIngredients(BaseModel):
    includeIngredient: List[str] = []
    excludeIngredient: List[str] = []
    requestPage: int
    maxItemCountByPage: int


class DetailId(BaseModel):
    id: int


class SearchResult(BaseModel):
    totalPageCount: int
    currentPage: int
    result: List[ProductList] = []
