import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { gallery, type GalleryItem } from '../data/gallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Gallery = () => {
  useDocumentTitle('Galería');
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const show = (item: GalleryItem) => { setSelected(item); dialog.current?.showModal(); };
  const close = () => dialog.current?.close();
  return <><PageHero eyebrow="GALERÍA" title="El sabor entra por los ojos." description="Una selección de fotografías que inspiran el universo visual de ElderBurger." />
    <section className="section"><div className="container"><p className="content-notice">Imágenes ilustrativas del proyecto original. Su uso comercial requiere confirmar las licencias correspondientes.</p><div className="photo-grid">{gallery.map(item=><button className="photo-tile" key={item.src} type="button" onClick={()=>show(item)} aria-label={`Ampliar imagen: ${item.title}`}><img src={item.src} alt={item.alt} loading="lazy" /><span className="photo-overlay"><span>{item.title}</span><ZoomIn size={21} aria-hidden="true" /></span></button>)}</div></div></section>
    <dialog className="photo-dialog" ref={dialog} aria-label={selected ? `Imagen ampliada: ${selected.title}` : 'Imagen ampliada'} onClick={(event)=>{if(event.target === event.currentTarget) close();}}>
      <div className="dialog-contents"><button type="button" className="dialog-close" aria-label="Cerrar imagen" onClick={close}><X size={23}/></button>{selected && <><img src={selected.src} alt={selected.alt}/><p>{selected.title}</p></>}</div>
    </dialog>
  </>;
};
