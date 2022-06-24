from rest_framework.serializers import ModelSerializer
from .models import Article, ArticleText, Extra, Bonus


class ArcticleSerializer(ModelSerializer):
  class Meta:
    model = Article
    fields = [
      "pk",
      "title",
      "label",
      "is_blocked",
    ]

class ArticleTextSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = ArticleText
    fields = [
      "article_id",
      "title",
      "text",
      "image_1",
      "image_2",
      "image_3",
    ]

class ExtraSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Extra
    fields = [
      "article_id",
      "title",
      "text",
      "image",
    ]

class BonusSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Bonus
    fields = [
      "article_id",
      "title",
      "text_bonus",
      "image",
      "pdf",
      "meditation",
      "instruction",
    ]
