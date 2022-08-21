from .models import UserAccess

def change_access(pk, user, is_blocked):
    if pk==1:
        try:
            UserAccess.objects.filter(user=user).update(article_1=is_blocked)
            return True
        except:
            return False
    if pk==2:
        try:
            UserAccess.objects.filter(user=user).update(article_2=is_blocked)
            return True
        except:
            return False
    if pk==3:
        try:
            UserAccess.objects.filter(user=user).update(article_3=is_blocked)
            return True
        except:
            return False
    if pk==4:
        try:
            UserAccess.objects.filter(user=user).update(article_4=is_blocked)
            return True
        except:
            return False
    if pk==5:
        try:
            UserAccess.objects.filter(user=user).update(article_5=is_blocked)
            return True
        except:
            return False
    if pk==6:
        try:
            UserAccess.objects.filter(user=user).update(article_6=is_blocked)
            return True
        except:
            return False
    if pk==7:
        try:
            UserAccess.objects.filter(user=user).update(article_7=is_blocked)
            return True
        except:
            return False
    if pk==8:
        try:
            UserAccess.objects.filter(user=user).update(article_8=is_blocked)
            return True
        except:
            return False
            
    if pk==9:
        try:
            UserAccess.objects.filter(user=user).update(article_9=is_blocked)
            return True
        except:
            return False
    if pk==10:
        try:
            UserAccess.objects.filter(user=user).update(article_10=is_blocked)
            return True
        except:
            return False
    if pk==11:
        try:
            UserAccess.objects.filter(user=user).update(article_11=is_blocked)
            return True
        except:
            return False
    if pk==12:
        try:
            UserAccess.objects.filter(user=user).update(article_12=is_blocked)
            return True
        except:
            return False
    if pk==13:
        try:
            UserAccess.objects.filter(user=user).update(article_13=is_blocked)
            return True
        except:
            return False
    if pk==14:
        try:
            UserAccess.objects.filter(user=user).update(article_14=is_blocked)
            return True
        except:
            return False
    if pk==15:
        try:
            UserAccess.objects.filter(user=user).update(article_15=is_blocked)
            return True
        except:
            return False
    if pk==16:
        try:
            UserAccess.objects.filter(user=user).update(article_16=is_blocked)
            return True
        except:
            return False
    if pk==17:
        try:
            UserAccess.objects.filter(user=user).update(article_17=is_blocked)
            return True
        except:
            return False
    if pk==18:
        try:
            UserAccess.objects.filter(user=user).update(article_18=is_blocked)
            return True
        except:
            return False
    if pk==19:
        try:
            UserAccess.objects.filter(user=user).update(article_19=is_blocked)
            return True
        except:
            return False
    if pk==20:
        try:
            UserAccess.objects.filter(user=user).update(article_20=is_blocked)
            return True
        except:
            return False
