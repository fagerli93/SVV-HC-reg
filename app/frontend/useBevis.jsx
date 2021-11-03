// import {
//     query,
//     collection,
//     getFirestore,
//     orderBy,
//     limit,
//     onSnapshot,
//     addDoc,
// } from "firebase/firestore";
// import { useEffect, useState } from "react";
export default {};
// interface UseCollectionProps {
//   collection: string;
//   orderBy: string;
// }

// export interface Message {
//   id: string;
//   message: string;
//   date: string;
//   userId: string;
//   name: string;
//   photo?: string;
// }

// const useCollection = props => {
//     return {};
// const [bevis, setBevis] = useState([]);
// const recentMessagesQuery = query(
//     collection(getFirestore(), "bevis"),
//     orderBy(props.orderBy, "asc"),
//     limit(25)
// );

// useEffect(() => {
//     const unsub = onSnapshot(recentMessagesQuery, snapshot => {
//         const updatedItems = snapshot.docs.map(snapshot => {
//             const data = snapshot.data();
//             const res = {
//                 id: snapshot.id,
//                 navn: data.message,
//                 bevisnummer: data.bevisnummer,
//                 kjonn: data.kjonn,
//                 brukerkode: data.brukerkode,
//                 fodselsaar: data.fodselsaar,
//                 gyldigFra: data.gyldigFra,
//                 gyldigTil: data.gyldigTil,
//                 kommunenummer: data.kommunenummer,
//             };
//             return res;
//         });
//         setBevis(updatedItems);
//     });

//     return () => {
//         unsub();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

// // const sendBevis = async bevis => {
// //     await addDoc(collection(getFirestore(), "bevis"), {
// //         navn: bevis.navn,
// //         bevisnummer: bevis.bevisnummer,
// //         brukerkode: bevis.brukerkode,
// //         fodselsaar: bevis.fodselsaar,
// //         gyldigFra: bevis.gyldigFra,
// //         gyldigTil: bevis.gyldigTil,
// //         kjonn: bevis.kjonn,
// //         kommunenummer: bevis.kommunenummer,
// //     });
// // };

// return { bevis };
// };

export default useCollection;
