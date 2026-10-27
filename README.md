# Red de Productores de Arándano — Demo

Demo de **Vibras Positivas HM** preparada como propuesta para **Agroventure Capital**. No es una app oficial de Agroventure. Productores, precios y cifras de calidad son de ejemplo (ficticios).

**URL:** https://agroventure-productores.netlify.app (repo sugerido: `haroldco45/agroventure-productores`)

## Para quién
Los pequeños y medianos productores que le entregarían arándano a la empacadora de Tocancipá, y la gerencia de Agroventure que necesita ver toda la red.

## Qué trae
- **Inicio:** datos de la finca, kilos del mes, % exportable, pago estimado, próxima entrega y alertas del día (carencias, informe trimestral al ICA, análisis de agua).
- **Entregas:** cada entrega es un lote con código QR (finca, municipio, registro ICA, variedad, hora de cosecha, kilos, temperatura de pulpa). Remisión de transporte para imprimir y envío por WhatsApp. Avisa si la fecha choca con una carencia.
- **Calidad y pago:** % exportable por entrega, causas de descarte con consejo, liquidación por lote con precios editables.
- **ICA y campo:** los 10 requisitos de la Resolución ICA 824 de 2022 para el lugar de producción y el cuaderno de aplicaciones con carencias.
- **Panel empresa:** productores, hectáreas, kilos por semana, exportable ponderado, uso de la capacidad de 500 ha, ranking de calidad y alertas de la red.
- Español / inglés, funciona sin internet (PWA), los datos quedan en el celular.

## Fuentes
- Resolución ICA 824 de 2022 (registro de lugares de producción, exportadores y empacadoras de vegetales para exportación en fresco).
- Portal Frutícola (abril 2026): empacadora de Agroventure en Tocancipá, capacidad para 500 ha.
- INIA (2013 y 2017): causas de descarte y calidad de cosecha.

## Archivos
```
index.html  manifest.json  sw.js  qr.js (generador de QR, licencia MIT)
og-image.jpg  icon-192.png  icon-512.png  img/ (12 fotos reales)
```

Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados.
