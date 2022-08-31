from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField

class UserAccess(models.Model):
  user = models.ForeignKey(User, 
                           on_delete=models.CASCADE, 
                           null=True, 
                           verbose_name='Пользователь'
                           )
  instruction = models.BooleanField(default=True, verbose_name="Инструкция")
  article_1 = models.BooleanField(default=False, verbose_name="Статья 1: Заблокированно?")
  article_2 = models.BooleanField(default=True, verbose_name="Статья 2: Заблокированно?")
  article_3 = models.BooleanField(default=True, verbose_name="Статья 3: Заблокированно?")
  article_4 = models.BooleanField(default=True, verbose_name="Статья 4: Заблокированно?")
  article_5 = models.BooleanField(default=True, verbose_name="Статья 5: Заблокированно?")
  article_6 = models.BooleanField(default=True, verbose_name="Статья 6: Заблокированно?")
  article_7 = models.BooleanField(default=True, verbose_name="Статья 7: Заблокированно?")
  article_8 = models.BooleanField(default=True, verbose_name="Статья 8: Заблокированно?")
  article_9 = models.BooleanField(default=True, verbose_name="Статья 9: Заблокированно?")
  article_10 = models.BooleanField(default=True, verbose_name="Статья 10: Заблокированно?")
  article_11 = models.BooleanField(default=True, verbose_name="Статья 11: Заблокированно?")
  article_12 = models.BooleanField(default=True, verbose_name="Статья 12: Заблокированно?")
  article_13 = models.BooleanField(default=True, verbose_name="Статья 13: Заблокированно?")
  article_14 = models.BooleanField(default=True, verbose_name="Статья 14: Заблокированно?")
  article_15 = models.BooleanField(default=True, verbose_name="Статья 15: Заблокированно?")
  article_16 = models.BooleanField(default=True, verbose_name="Статья 16: Заблокированно?")
  article_17 = models.BooleanField(default=True, verbose_name="Статья 17: Заблокированно?")
  article_18 = models.BooleanField(default=True, verbose_name="Статья 18: Заблокированно?")
  article_19 = models.BooleanField(default=True, verbose_name="Статья 19: Заблокированно?")
  article_20 = models.BooleanField(default=True, verbose_name="Статья 20: Заблокированно?")


  def __str__(self):
    return str(self.user)
  class Meta:
    verbose_name = "Пользовательский доступ"
    verbose_name_plural = 'Пользовательский доступ'


class Article(models.Model):
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  label = models.ImageField(
        upload_to='uploads/labels', 
        blank=True, 
        verbose_name='Лого статьи'
    )

  def __str__(self):
    return f"№{str(self.pk)}: {str(self.title)}"

  class Meta:
        ordering = ["pk"]
        verbose_name = "Статья курса"
        verbose_name_plural = "Статьи курса"


class ArticleText(models.Model):
  article_id = models.ForeignKey('Article', default=0, on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  text = HTMLField(verbose_name='Текст статьи 1', null=True, blank=True)
  text_2 = HTMLField(verbose_name='Текст статьи 2', null=True, blank=True)
  text_3 = HTMLField(verbose_name='Текст статьи 1', null=True, blank=True)
  extra_task = models.IntegerField(verbose_name='Екстра Задание', null=True, blank=True)
  image_1 = models.ImageField(
        upload_to='uploads/articles', 
        blank=True, 
        verbose_name='Картинка для статьи 1'
    )
  image_2 = models.ImageField(
        upload_to='uploads/articles', 
        blank=True, 
        verbose_name='Картинка для статьи 2'
    )
  image_3 = models.ImageField(
        upload_to='uploads/articles', 
        blank=True, 
        verbose_name='Картинка для статьи 3'
    )

  def __str__(self):
        return f"Основной контент: {str(self.article_id)}"
  
  class Meta:
        verbose_name = "Основной текст статьи"
        verbose_name_plural = "Текст для статей курса"


class Bonus(models.Model):
  related_id = models.IntegerField('Относительный ID', null=True, blank=True)
  title = models.CharField(max_length=256, verbose_name='Название для бонуса')
  text_bonus = HTMLField(verbose_name='Текст для бонуса', default='bonus')
  pdf = models.CharField(
        max_length=256,
        blank=True, 
        verbose_name='ПДФка для бонуса'
    )
  meditation = models.FileField(
        upload_to='uploads/meditation', 
        blank=True, 
        verbose_name='Медитация'
    )

  def __str__(self):
        return f"{str(self.title)}: {str(self.related_id)}"

  class Meta:
    verbose_name = "Бонус задание"
    verbose_name_plural = "Бонус задания"
