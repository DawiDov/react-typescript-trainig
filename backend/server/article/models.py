from django.db import models

from tinymce.models import HTMLField


class Article(models.Model):
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  label = models.ImageField(upload_to='uploads/labels', blank=True, verbose_name='Лого статьи')
  is_blocked = models.BooleanField(default=True, verbose_name="Заблокированно?")

  def __str__(self):
    if self.is_blocked == True:
      return f"№{str(self.pk)}: {str(self.title)} -- ЗАБЛОКИРОВАНО"
    return f"№{str(self.pk)}: {str(self.title)}"

  class Meta:
        verbose_name = "Статья курса"
        verbose_name_plural = "Статьи курса"


class ArticleText(models.Model):
  article_id = models.ForeignKey('Article', default=0, on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  text = HTMLField(verbose_name='Текст статьи 1', null=True, blank=True)
  text_2 = HTMLField(verbose_name='Текст статьи 2', null=True, blank=True)
  text_3 = HTMLField(verbose_name='Текст статьи 1', null=True, blank=True)
  image_1 = models.ImageField(upload_to='uploads/articles', blank=True, verbose_name='Картинка для статьи 1')
  image_2 = models.ImageField(upload_to='uploads/articles', blank=True, verbose_name='Картинка для статьи 2')
  image_3 = models.ImageField(upload_to='uploads/articles', blank=True, verbose_name='Картинка для статьи 3')

  def __str__(self):
        return f"Основной контент: {str(self.article_id)}"
  
  class Meta:
        verbose_name = "Основной текст статьи"
        verbose_name_plural = "Текст для статей курса"


class Extra(models.Model):
  article_id = models.ForeignKey('Article', null=True, on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название екстра задания')
  text = HTMLField(verbose_name='Текст екстра задания')
  image = models.ImageField(upload_to='uploads/extra', blank=True, verbose_name='Картинка для задания')

  def __str__(self):
        return f"Extra задание: {str(self.article_id)}"

  class Meta:
    verbose_name = "Екстра задание"
    verbose_name_plural = "Екстра задания"


class Bonus(models.Model):
  article_id = models.ForeignKey('Article', null=True, on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название для бонуса')
  text_bonus = HTMLField(verbose_name='Текст для бонуса', default='bonus')
  image = models.ImageField(upload_to='uploads/bonus/', blank=True, verbose_name='Картинка для бонуса')  
  pdf = models.FileField(upload_to='uploads/bonus', blank=True, verbose_name='ПДФка для бонуса')
  meditation = models.FileField(upload_to='uploads/meditation', blank=True, verbose_name='Медитация')
  instruction = models.FileField(
    blank=True,
    default='uploads/meditation/как_правильно_медитировать.pdf',
    upload_to='uploads/meditation',
    verbose_name='Инструкция к медитации',
    )

  def __str__(self):
        return f"{str(self.title)}: {str(self.article_id)}"

  class Meta:
    verbose_name = "Бонус задание"
    verbose_name_plural = "Бонус задания"
