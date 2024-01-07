import{b as n}from"./chunk-LSZKOVGW.mjs";import{j as a,k as i}from"./chunk-SGUETU3K.mjs";var e=["###","##","#"];var t=["Espoo","Helsinki","Hyvink\xE4\xE4","Iisalmi","Joensuu","Jyv\xE4skyl\xE4","Kokkola","Kuopio","Lahti","Oulu","Pori","Porvoo","Raisio","Rovaniemi","Sastamala","Tampere","Turku","Vaasa","Valkeakoski","Vantaa"];var o=["{{location.city_name}}"];var r=["#####"];var l=["A","B","C","A #","A ##","B #","B ##","C #","C ##"];var k=["Ahvenanmaa","Etel\xE4-Karjala","Etel\xE4-Pohjanmaa","Etel\xE4-Savo","Kainuu","Kanta-H\xE4me","Keski-Pohjanmaa","Keski-Suomi","Kymenlaakso","Lappi","P\xE4ij\xE4t-H\xE4me","Pirkanmaa","Pohjanmaa","Pohjois-Karjala","Pohjois-Pohjanmaa","Pohjois-Savo","Satakunta","Uusimaa","Varsinais-Suomi"];var m={normal:"{{location.street}} {{location.buildingNumber}}",full:"{{location.street}} {{location.buildingNumber}} {{location.secondaryAddress}}"};var s=["{{person.first_name}}{{location.street_suffix}}","{{person.last_name}}{{location.street_suffix}}"];var u=["katu","tie","kuja","polku","kaari","linja","raitti","rinne","penger","ranta","v\xE4yl\xE4"];var S={building_number:e,city_name:t,city_pattern:o,postcode:r,secondary_address:l,state:k,street_address:m,street_pattern:s,street_suffix:u},p=S;var j={title:"Finnish",code:"fi",language:"fi",endonym:"suomi",dir:"ltr",script:"Latn"},f=j;var M=["Aino","Anja","Anna","Anne","Anneli","Annikki","Eeva","Elina","Elisabet","Emilia","Eveliina","Hanna","Hannele","Helena","Inkeri","Irmeli","Johanna","Kaarina","Karoliina","Katariina","Kristiina","Kyllikki","Laura","Leena","Liisa","Maarit","Maija","Mari","Maria","Marika","Marja","Marjatta","Minna","Orvokki","Pauliina","Pirjo","Pirkko","P\xE4ivi","Riitta","Ritva","Sari","Satu","Sinikka","Sofia","Susanna","Tarja","Tellervo","Tiina","Tuula","Tuulikki"];var d=["Aleksi","Antero","Antti","Ari","Eero","Ensio","Erik","Erkki","Hannu","Heikki","Henrik","Ilmari","Jaakko","Janne","Jari","Johannes","Juha","Juhani","Juho","Jukka","Kalervo","Kalevi","Kari","Kristian","Lauri","Markku","Marko","Markus","Martti","Matias","Matti","Mika","Mikael","Mikko","Olavi","Oskari","Pekka","Pentti","Petri","Petteri","Sakari","Sami","Seppo","Tapani","Tapio","Timo","Tuomas","Valtteri","Veikko","Ville","Aino","Anja","Anna","Anne","Anneli","Annikki","Eeva","Elina","Elisabet","Emilia","Eveliina","Hanna","Hannele","Helena","Inkeri","Irmeli","Johanna","Kaarina","Karoliina","Katariina","Kristiina","Kyllikki","Laura","Leena","Liisa","Maarit","Maija","Mari","Maria","Marika","Marja","Marjatta","Minna","Orvokki","Pauliina","Pirjo","Pirkko","P\xE4ivi","Riitta","Ritva","Sari","Satu","Sinikka","Sofia","Susanna","Tarja","Tellervo","Tiina","Tuula","Tuulikki"];var v=["Aaltonen","Ahonen","Anttila","Hakala","Heikkil\xE4","Heikkinen","Heinonen","Hiltunen","Hirvonen","H\xE4m\xE4l\xE4inen","Jokinen","J\xE4rvinen","Kallio","Karjalainen","Kinnunen","Koivisto","Korhonen","Koskinen","Laakso","Laaksonen","Lahtinen","Laine","Laitinen","Lehtinen","Lehto","Lehtonen","Leinonen","Lepp\xE4nen","Manninen","Mattila","Miettinen","Mustonen","M\xE4kel\xE4","M\xE4kinen","Niemi","Nieminen","Ojala","Pitk\xE4nen","Rantanen","R\xE4s\xE4nen","Saarinen","Salminen","Salo","Salonen","Savolainen","Toivonen","Tuominen","Turunen","Virtanen","V\xE4is\xE4nen"];var K=[{value:"{{person.last_name}}",weight:1}];var P=["Aleksi","Antero","Antti","Ari","Eero","Ensio","Erik","Erkki","Hannu","Heikki","Henrik","Ilmari","Jaakko","Janne","Jari","Johannes","Juha","Juhani","Juho","Jukka","Kalervo","Kalevi","Kari","Kristian","Lauri","Markku","Marko","Markus","Martti","Matias","Matti","Mika","Mikael","Mikko","Olavi","Oskari","Pekka","Pentti","Petri","Petteri","Sakari","Sami","Seppo","Tapani","Tapio","Timo","Tuomas","Valtteri","Veikko","Ville"];var c=[{value:"{{person.firstName}} {{person.lastName}}",weight:1}];var L={female_first_name:M,first_name:d,last_name:v,last_name_pattern:K,male_first_name:P,name:c},h=L;var x={location:p,metadata:f,person:h},A=x;var fa=new a({locale:[A,n,i]});export{A as a,fa as b};