import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Message,
  Segment
} from "semantic-ui-react";
import { actionCreators } from "../../../store/PatientsFiles";
import { useSelector, useDispatch } from 'react-redux';
import { patientsFilesModel } from '../../../models/patientsFilesModel';
import {useLocation, useParams} from 'react-router-dom';

const gender = [
    { key: 'm', text: 'مرد', value: 'مرد' },
    { key: 'f', text: 'زن', value: 'زن' },
]

const birthPlace = [
    { key: 'tehran', text: 'تهران', value: 'مرد' },
    { key: 'esfahan', text: 'اصفهان', value: 'اصفهان' },
    { key: 'tabriz', text: 'تبریز', value: 'تبریز' },
    { key: 'kashan', text: 'کاشان', value: 'کاشان' },
]

const addressPlace = [
    { key: 'tehran', text: 'تهران', value: 'مرد' },
    { key: 'esfahan', text: 'اصفهان', value: 'اصفهان' },
    { key: 'tabriz', text: 'تبریز', value: 'تبریز' },
    { key: 'kashan', text: 'کاشان', value: 'کاشان' },
]

const insuranceType = [
    { key: 'tamin', text: 'تامین اجتماعی', value: 'تامین اجتماعی' },
    { key: 'takmili', text: 'تکمیلی', value: 'تکمیلی' },
]


const PatientsInformation = (props) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [patientInformation, setPatientInformation] = useState(patientsFilesModel);

    const patientInformationList = useSelector(state => state.patientsFiles.patients);

    useEffect(()=>{
        dispatch(actionCreators.getPatients);
        if(patientInformationList){
            setPatientInformation(patientInformationList);
        }
    }, [dispatch])


    const deletePatientInfo = id => {
        dispatch(actionCreators.removePatient(id))
    };

    const selectPatientInfoForEditing = id => {
        console.log(id);
        let patientInformation = patientInformationList.find(v => v.id === id);
        setPatientInformation(patientInformation);
    };

    const handleSubmit = () => {
        if (patientInformation.id > 0) {
        dispatch(actionCreators.editPatient(patientInformation))
        .then(data => {
            setPatientInformation({
                id: data.id,
                fullName: data.fullName,
                fatherName: data.id,
                personalCode: data.fatherName,
                birthDate: data.birthDate,
                surgeryDate: data.surgeryDate,
                birthPlace: data.birthPlace,
                addressPlace: data.addressPlace,
                insuranceType: data.insuranceType,
                phoneNumber: data.phoneNumber,
                age: data.age,
                gender: data.gender,
                weight: data.weight,
                height: data.height,
                BMI: data.BMI,
                doctor: data.doctor
        });
    })
    } else{
        dispatch(actionCreators.addPatient(patientInformation))
        .then(data => {
            setPatientInformation({
                id: data.id,
                fullName: data.fullName,
                fatherName: data.id,
                personalCode: data.fatherName,
                birthDate: data.birthDate,
                surgeryDate: data.surgeryDate,
                birthPlace: data.birthPlace,
                addressPlace: data.addressPlace,
                insuranceType: data.insuranceType,
                phoneNumber: data.phoneNumber,
                age: data.age,
                gender: data.gender,
                weight: data.weight,
                height: data.height,
                BMI: data.BMI,
                doctor: data.doctor
            });
        })
        }
        
        clearPatientInfoForm();
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setPatientInformation({ ...patientInformation, [name]: value });
    }

    const clearPatientInfoForm = () => {
        setPatientInformation(patientsFilesModel.newPatients);
    };
  
    return(
        <Form>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>نام و نام خانوادگی بیمار</label>
                <Input
                    type="text"
                    name="fullName"
                    value={patientInformation.fullName || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>نام پدر</label>
                <Input
                    type="text"
                    name="fatherName"
                    value={patientInformation.fatherName || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='محل تولد'
                options={birthPlace}
                />
                 <Form.Select
                fluid
                label='نوع بیمه'
                options={insuranceType}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>کدملی</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="personalCode"
                    value={patientInformation.personalCode || ''}
                />
                </Form.Field>
                {/* <Form.Field>
                <label>تاریخ تولد</label>
                <Input
                type="date"
                onChange={handleChange}
                name="birthDate"
                value={patientInformation.birthDate || ''}
                fluid
                />  
                </Form.Field> */}
                <Form.Field>
                <label>پزشک معالج</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="doctor"
                    value={patientInformation.doctor || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='جنسیت'
                options={gender}
                />
                <Form.Field>
                <label>وزن</label>
                <Input
                type="text"
                onChange={handleChange}
                name="weight"
                value={patientInformation.weight || ''}
                fluid
                />  
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>قد</label>
                <Input
                    type="text"
                    name="height"
                    value={patientInformation.height || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>BMI</label>
                <Input
                    type="text"
                    name="BMI"
                    value={patientInformation.BMI || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}

export default PatientsInformation;
