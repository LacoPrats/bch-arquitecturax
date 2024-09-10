
import GallaretasP from '../../assets/imags/prensa/gallaretas/gallaretas.png'
import Gallaretas1 from '../../assets/imags/prensa/gallaretas/revistagallareta.pdf'


import FachadasP from'../../assets/imags/prensa/fachada/fachada.png'
import Fachadas1 from'../../assets/imags/prensa/fachada/revistafachada.pdf'

import FoaP from'../../assets/imags/prensa/foa/foap.png'
import Foa from'../../assets/imags/prensa/foa/casafoapdf.pdf'

export const data = [
  {
    id: "revista1",
    name: "Revista Gallareta",
    portada:GallaretasP,
    pdf:[Gallaretas1],
    ubicación:"NORDELTA - TIGRE, BS. AS",
  },
  {
    id: "revista2",
    name: "Revista Fachada",
    portada: FachadasP,
    pdf:[Fachadas1],
    ubicación:"NUÑEZ – CABA , BS. AS.",
  },
  {
    id: "revista3",
    name: "Casa Foa",
    portada: FoaP,
    pdf:[Foa],
    ubicación:"NUÑEZ – CABA , BS. AS.",
  },
  
];