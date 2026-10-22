export const business = { name: '#1 Stop Detailing Shop LLC', phone: '717-615-7099', telephone: 'tel:+17176157099', email: '1stopdetailingshop@gmail.com', address: '36 Manor Ave., Millersville, PA 17551', maps: 'https://www.google.com/maps/dir/?api=1&destination=36+Manor+Ave+Millersville+PA+17551' };
export const services = [
 {name:'Full Detailing',description:'Interior and exterior vehicle detailing.',icon:'✧',detail:'A fresh perspective. Inside and out.'},
 {name:'Paint Correction',description:'Restore the appearance of paint by reducing visible imperfections.',icon:'◈',detail:'Bring your paint back into focus.'},
 {name:'Ceramic Coating',description:'Protective coatings designed to enhance gloss and simplify maintenance.',icon:'⬡',detail:'More gloss. Easier maintenance.'},
 {name:'Aluminum Polishing',description:'Polishing services for aluminum surfaces.',icon:'✦',detail:'Give the details their moment.'},
];
export const vehicles = ['Cars','Trucks','Boats','RVs','Motorcycles'];
export const asset = (name:string) => `${import.meta.env.BASE_URL}images/${name}.jpg`;
// Sample stock photography, never represented as customer work.
// For real before/after pairs, add two entries with explicit Before and After labels.
export const gallery = [
 {file:'hero',title:'Deep black finish',alt:'Sample black sports car on a road',phase:'Sample inspiration'},
 {file:'detail',title:'Details make the difference',alt:'Sample sports car with a glossy finish',phase:'Sample inspiration'},
 {file:'interior',title:'A standout finish',alt:'Sample red sports car parked on a street',phase:'Sample inspiration'},
];
