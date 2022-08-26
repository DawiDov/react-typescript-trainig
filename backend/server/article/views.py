from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .change_access import change_access
from .models import Article, UserAccess, ArticleText, Bonus
from .pagination import StandardResultsSetPagination
from .serializers import ( 
    ArcticleSerializer,
    UserAccessSerializer, 
    ArticleTextSerializer, 
    BonusSerializer, 
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
        access = change_access(int(pk), user, is_blocked)
        if access == True:
            return Response(status=HTTP_200_OK)
        if access == False:
            return Response(status=HTTP_400_BAD_REQUEST)
        

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArcticleSerializer 
    pagination_class = StandardResultsSetPagination
    

class ArticleTextViewSet(ModelViewSet):
    queryset = ArticleText.objects.all()
    serializer_class = ArticleTextSerializer


class BonusViewSet(ModelViewSet):
    serializer_class = BonusSerializer
    
    def get_queryset(self):
        id = self.request.query_params.get('id')
        return Bonus.objects.filter(related_id=id)

