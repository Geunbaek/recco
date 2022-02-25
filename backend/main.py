from fastapi import Depends, FastAPI, HTTPException, Request
from sqlalchemy.orm import Session

from app import models
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root(request: Request):
    return {"Hello": "API!!!"}