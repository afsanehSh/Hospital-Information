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
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
]

const birthPlace = [
    { key: 'tehran', text: 'tehran', value: 'tehran' },
    { key: 'esfahan', text: 'esfahan', value: 'esfahan' },
    { key: 'tabriz', text: 'tabriz', value: 'tabriz' },
    { key: 'kashan', text: 'kashan', value: 'kashan' },
]

const insuranceType = [
    { key: 'tamin', text: 'tamin', value: 'tamin' },
    { key: 'takmili', text: 'takmili', value: 'takmili' },
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
                <label>FullName</label>
                <Input
                    type="text"
                    name="fullName"
                    value={patientInformation.fullName || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Father Name</label>
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
                label='Birth Place'
                options={birthPlace}
                />
                 <Form.Select
                fluid
                label='Insurance Type'
                options={insuranceType}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Personal Code</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="personalCode"
                    value={patientInformation.personalCode || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Doctor</label>
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
                label='Gender'
                options={gender}
                />
                <Form.Field>
                <label>Weight</label>
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
                <label>Height</label>
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
