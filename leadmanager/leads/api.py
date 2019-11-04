from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from leads.models import Lead

class LeadViewSet(viewsets.ModelViewSet):
  queryset = Lead.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = LeadSerializer

