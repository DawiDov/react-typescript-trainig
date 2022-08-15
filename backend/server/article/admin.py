from django.contrib import admin

from article.models import UserAccess, Article, ArticleText, Bonus, Extra


# Register your models here.
@admin.register(UserAccess)
class AdminUserAccess(admin.ModelAdmin):
  pass

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
