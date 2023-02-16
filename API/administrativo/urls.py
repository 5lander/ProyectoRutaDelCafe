from django.urls import path
from .views import *
from django.urls import path, include
from .views import Emprendimiento_APIView_Detalles
app_name='administrativo'




urlpatterns = [
    path("emprendimientos/<int:id_emprendimiento>/",VerEmprendimiento.as_view(),name ='detalleEmprendimientos'),
    path('emprendimientos/listado/<int:id_servicio>',ListarEmprendimientos.as_view(),name='listadoEmprendimientos' ),
    path('emprendimientos/reserva/<int:id_producto>',GenerarReserva.as_view(),name='reserva' ),
    path('index', Index.as_view(), name="index"),
    path('api/emprendimientos',Emprendimiento_APIView.as_view(),name='ListadoEmprendimientos'),
    path('api/servicios',Servicio_APIView.as_view(),name='ListadoServicios')  ,
    path('api/reservas',Reserva_APIView.as_view(),name='ListadoReservas')  ,
    path('api/productos',Producto_APIView.as_view(),name='ListadoProductos')  ,
    path('api/emprendimientodetalles/<int:id_emprendimiento>',Emprendimiento_APIView_Detalles.as_view(),name='ListadoProductos') 
]

