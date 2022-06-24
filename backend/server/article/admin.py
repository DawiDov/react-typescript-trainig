from django.contrib import admin
from article.models import Article, ArticleText, Extra, Bonus

# Register your models here.
@admin.register(Article)
class AdminArticle(admin.ModelAdmin):
   pass

@admin.register(ArticleText)
class AdminArticleText(admin.ModelAdmin):
   pass

@admin.register(Extra)
class AdminExtra(admin.ModelAdmin):
   pass
  
@admin.register(Bonus)
class AdminBonus(admin.ModelAdmin):
   pass