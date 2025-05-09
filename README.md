# Proyecto Ionic: Galería de Fotos

Este proyecto demuestra el uso de Capacitor e Ionic para tomar, guardar y mostrar fotos en un dispositivo móvil.
1.-Mostrar las fotos y además mostrar el nombre del archivo debajo de cada foto  
    - Se modificó el servicio `photo.service.ts` para que cada foto guardada también almacene el nombre del archivo (`fileName`).
    - En la vista se agregó un `<p>{{ photo.fileName }}</p>` debajo de cada imagen.
    - Esto permite al usuario identificar visualmente el nombre de cada imagen que ha tomado o cargado.
2.-Mostrar las fotos previamente guardadas en el tab3 en lugar del tab2
  - Las fotos anteriormente se mostraban en el `tab2`.
  - Se movió el componente de visualización al archivo `tab3.page.html` y se ajustó el componente `tab3.page.ts` para manejar la carga de imágenes.
3.-No mostrar las fotos automáticamente, implementar un botón que me permita cargar las fotos
  - En lugar de cargar las fotos automáticamente con `ngOnInit`, se implementó un botón con el evento `(click)="loadPhotos()"`.
  - Esto le da al usuario control explícito sobre cuándo desea ver sus fotos.
  - Solo se muestran las imágenes si la variable `photosLoaded` es `true`.
##anexos:
![image](https://github.com/user-attachments/assets/eb62ce4b-3263-4635-aeff-236d3f15f428)
![image](https://github.com/user-attachments/assets/c02ff079-03dc-4745-abb0-20c789296cda)

## Instalación
```bash
npm install
ionic build
ionic cap add android
ionic cap open android

