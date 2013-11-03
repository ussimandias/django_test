from tastypie.resources import ModelResource
from tastypie.constants import ALL
from models import Article

class ArticleResource(ModelResource):
    class Meta:
        queryset = Article.object.all()
        rsource_name = 'article'
