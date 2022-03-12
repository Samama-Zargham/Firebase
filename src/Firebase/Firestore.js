import firestore from "@react-native-firebase/firestore"


const FStore = ({props1}) => {
    firestore()
        .collection('users')
        .doc('ABC')
        .update({
            eAdress: props1.eAdress,
            pass: props1.pass,
            Fname: props1.Fname,
            phNo: props1.phNo,
            AdresLine: props1.AdresLine,
            State: props1.State,
            ZipCode: props1.ZipCode,
            Country: props1.Country,
            dMethod: props1.dMethod,
            doorCode: props1.doorCode,
            dropMethod: props1.dropMethod,
            Cardno: props1.Cardno,
            ExDate: props1.ExDate,
            CVC: props1.cvc,
        })
        .then(() => {
            console.log('User updated!');
        })

}

export default  FStore 
