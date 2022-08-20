from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import Article, UserAccess, ArticleText, Bonus, Extra
from .pagination import StandardResultsSetPagination
from .serializers import ( 
    UserAccessSerializer, 
    ArticleTextSerializer, 
    BonusSerializer, 
    ExtraSerializer,
)


class UserAccessViewSet(ModelViewSet):
    serializer_class =UserAccessSerializer 
    pagination_class = StandardResultsSetPagination
    

    def get_queryset(self):
       user = self.request.user
       return UserAccess.objects.filter(user=user)

    @action(
        methods=["POST"],
        detail=True,
        url_name="access",
        url_path="access",
    )
    def get_access(self, request, pk=None):
        user=request.user
        is_blocked=request.data['is_blocked']
        article=Article.objects.get(pk=pk)
        access =UserAccess.objects.filter(articles=article).update(is_blocked=is_blocked)
        print('OLOLOLOLOLO')
        print(access)
        print('OLOLOLOLOLO')
        return access
        


class ArticleTextViewSet(ModelViewSet):
    queryset = ArticleText.objects.all()
    serializer_class = ArticleTextSerializer

    
class ExtraViewSet(ModelViewSet):
    queryset = Extra.objects.all()
    serializer_class = ExtraSerializer


class BonusViewSet(ModelViewSet):
    queryset = Bonus.objects.all()
    serializer_class = BonusSerializer
