import React, { useEffect, useState } from 'react';
import {
    Form,
    Input
  } from "semantic-ui-react";
  import { useSelector, useDispatch } from 'react-redux';
  import { actionCreators } from "../../../store/PatientsFiles";
  import { patientsFilesModel } from '../../../models/patientsFilesModel';

const default_Dropdown = [
    { key: '1week', text: 'Week 1', value: 'Week 1' },
    { key: '3week', text: 'Week 3', value: 'Week 3' },
    { key: '6week', text: 'Week 6', value: 'Week 6' },
    { key: '3month', text: 'Month 3', value: 'Month 3' },
    { key: '6month', text: 'Month 6', value: 'Month 6' },
    { key: '12month', text: 'Month 12', value: 'Month 12' }, 
    { key: '24month', text: 'Month 24', value: 'Month 24' }
]
const causesRoizen = [
    { key: 'SEPTICKNEE', text: 'SEPTIC KNEE', value: 'SEPTIC KNEE' },
    { key: 'fASEPTICLOOSENING', text: 'ASEPTIC LOOSENING', value: 'ASEPTIC LOOSENING' },
    { key: 'SEPTICLOOSENING', text: 'SEPTIC LOOSENING', value: 'SEPTIC LOOSENING' },
]
const spacerType = [
    { key: 'STATIC', text: 'STATIC', value: 'STATIC' },
    { key: 'DYNAMIC', text: 'DYNAMIC', value: 'DYNAMIC' },
]

const PostoperativeInformation = (props) => {

    const dispatch = useDispatch();
    const [patientInformation, setPatientInformation] = useState(patientsFilesModel);

    const patientInformationList = useSelector(state => state.patientsFiles.patients);

    useEffect(()=>{
        dispatch(actionCreators.getPatients);
        if(patientInformationList){
            setPatientInformation(patientInformationList);
        }
    }, [dispatch])

    const handleChange = event => {
        const { name, value } = event.target;
        setPatientInformation({ ...patientInformation, [name]: value });
    }
  
    return(
        <Form>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Wound'
                options={default_Dropdown}
                />
                 <Form.Select
                fluid
                label='Side Effects Range of Motion (ROM)  A'
                options={default_Dropdown}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='Post op scores  '
                options={default_Dropdown}
                />
                 <Form.Select
                fluid
                label='Knee Injury and Osteoarthritis Outcome Score (KOOS)'
                options={default_Dropdown}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Knee Society Score (KSS-1)'
                options={default_Dropdown}
                />
                 <Form.Select
                fluid
                label='Western Ontario and McMaster Universities Arthritis Index'
                options={default_Dropdown}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='Causes Roizen'
                options={causesRoizen}
                />
               <Form.Select
                fluid
                label='SPACER TYPE'
                options={spacerType}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Knee Injury and Osteoarthritis Outcome Score (KOOS)</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="kneeInjuryAndOsteoarthritisOutcomeScoreKOOS"
                    value={patientInformation.kneeInjuryAndOsteoarthritisOutcomeScoreKOOS || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Knee Society Score (KSS-1)</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="KneeSocietyScoreKSS1"
                    value={patientInformation.KneeSocietyScoreKSS1 || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>Knee Society Score (KSS-2)</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="KneeSocietyScoreKSS2"
                    value={patientInformation.KneeSocietyScoreKSS2 || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Western Ontario and McMaster Universities Arthritis Index</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="westernOntarioAndMcMasterUniversitiesArthritisIndexWOMAC"
                    value={patientInformation.westernOntarioAndMcMasterUniversitiesArthritisIndexWOMAC || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>36-Item Short Form Survey (SF-36) PCF</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="itemShortFormSurveySF36PCF"
                    value={patientInformation.itemShortFormSurveySF36PCF || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Range of Motion (ROM)</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="rangeOfMotionROM"
                    value={patientInformation.rangeOfMotionROM || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>Flexion contracture </label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="flexionContracture"
                    value={patientInformation.flexionContracture || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>X ray</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="Xray"
                    value={patientInformation.Xray || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>Preoperative Hematocrit</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="preoperativeHematocrit"
                    value={patientInformation.preoperativeHematocrit || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Preoperative Hemoglobin</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="preoperativeHemoglobin"
                    value={patientInformation.preoperativeHemoglobin || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>Preoperative WBC</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="preoperativeWBC"
                    value={patientInformation.preoperativeWBC || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Platelets Before Surgery</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="plateletsBeforeSurgery"
                    value={patientInformation.plateletsBeforeSurgery || ''}
                />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}

export default PostoperativeInformation;