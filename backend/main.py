from fastapi import FastAPI

from apps import models
from apps.routers import detail, main, search
from database import engine

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(detail.router)
app.include_router(main.router)
app.include_router(search.router)
