{\rtf1\ansi\ansicpg1252\cocoartf2907
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
const CACHE_NAME = 'potato-offline-v1';\
self.addEventListener('install', (e) => \{\
  e.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => \{\
      return cache.addAll([\
        './',\
        './index.html',\
        './manifest.json',\
        'https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css'\
      ]);\
    \})\
  );\
\});\
\
self.addEventListener('fetch', (e) => \{\
  e.respondWith(\
    caches.match(e.request).then((response) => \{\
      return response || fetch(e.request);\
    \})\
  );\
\});}