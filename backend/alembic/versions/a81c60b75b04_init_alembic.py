"""init_alembic

Revision ID: a81c60b75b04
Revises: 
Create Date: 2022-03-02 18:16:26.558173

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a81c60b75b04'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ingredient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ko_ingredient', sa.TEXT(), nullable=True),
    sa.Column('en_ingredient', sa.TEXT(), nullable=True),
    sa.Column('use', sa.TEXT(), nullable=True),
    sa.Column('score', sa.String(length=10), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_ingredient_id'), 'ingredient', ['id'], unique=False)
    op.create_table('product',
    sa.Column('product_num', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('img_url', sa.String(length=500), nullable=False),
    sa.Column('brand', sa.String(length=50), nullable=False),
    sa.Column('average_rating', sa.Numeric(), nullable=True),
    sa.Column('price', sa.String(length=100), nullable=True),
    sa.Column('extinction', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('product_num')
    )
    op.create_index(op.f('ix_product_product_num'), 'product', ['product_num'], unique=False)
    op.create_table('descrip',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_num', sa.Integer(), nullable=True),
    sa.Column('color_type', sa.TEXT(), nullable=True),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('hashtag', sa.TEXT(), nullable=True),
    sa.Column('cost', sa.String(length=100), nullable=True),
    sa.Column('major_classification', sa.String(length=100), nullable=True),
    sa.Column('medium_classification', sa.String(length=100), nullable=True),
    sa.Column('minor_classification', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['product_num'], ['product.product_num'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_descrip_id'), 'descrip', ['id'], unique=False)
    op.create_index(op.f('ix_descrip_product_num'), 'descrip', ['product_num'], unique=False)
    op.create_table('productingredientrelation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_num', sa.Integer(), nullable=True),
    sa.Column('ingredient_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ingredient_id'], ['ingredient.id'], ),
    sa.ForeignKeyConstraint(['product_num'], ['product.product_num'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_productingredientrelation_id'), 'productingredientrelation', ['id'], unique=False)
    op.create_index(op.f('ix_productingredientrelation_ingredient_id'), 'productingredientrelation', ['ingredient_id'], unique=False)
    op.create_index(op.f('ix_productingredientrelation_product_num'), 'productingredientrelation', ['product_num'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_productingredientrelation_product_num'), table_name='productingredientrelation')
    op.drop_index(op.f('ix_productingredientrelation_ingredient_id'), table_name='productingredientrelation')
    op.drop_index(op.f('ix_productingredientrelation_id'), table_name='productingredientrelation')
    op.drop_table('productingredientrelation')
    op.drop_index(op.f('ix_descrip_product_num'), table_name='descrip')
    op.drop_index(op.f('ix_descrip_id'), table_name='descrip')
    op.drop_table('descrip')
    op.drop_index(op.f('ix_product_product_num'), table_name='product')
    op.drop_table('product')
    op.drop_index(op.f('ix_ingredient_id'), table_name='ingredient')
    op.drop_table('ingredient')
    # ### end Alembic commands ###
