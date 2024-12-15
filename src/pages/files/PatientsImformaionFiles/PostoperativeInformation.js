import React, { useEffect, useState } from 'react';
import {
    Form,
    Input
  } from "semantic-ui-react";
  import { useSelector, useDispatch } from 'react-redux';
  import { actionCreators } from "../../../store/PatientsFiles";
  import { patientsFilesModel } from '../../../models/patientsFilesModel';

const wound = [
    { key: 'week1', text: 'هفته 1', value: 'هفته 1' },
    { key: 'week3', text: 'هفته 3', value: 'هفته 3' },
    { key: 'week6', text: 'هفته 6', value: 'هفته 6' },
    { key: 'month3', text: 'ماه 3', value: 'ماه 3' },
    { key: 'month6', text: 'ماه 6', value: 'ماه 6' },
    { key: 'month12', text: 'ماه 12', value: 'ماه 12' }, 
    { key: 'month24', text: 'ماه 24', value: 'ماه 24' },
]
const ROMComplications = [
    { key: 'week1', text: 'هفته 1', value: 'هفته 1' },
    { key: 'week3', text: 'هفته 3', value: 'هفته 3' },
    { key: 'week6', text: 'هفته 6', value: 'هفته 6' },
    { key: 'month3', text: 'ماه 3', value: 'ماه 3' },
    { key: 'month6', text: 'ماه 6', value: 'ماه 6' },
    { key: 'month12', text: 'ماه 12', value: 'ماه 12' }, 
    { key: 'month24', text: 'ماه 24', value: 'ماه 24' },
]
const postOpScores = [
    { key: 'm', text: 'مرد', value: 'مرد' },
    { key: 'f', text: 'زن', value: 'زن' },
]
const KOOS = [
    { key: 'week1', text: 'هفته 1', value: 'هفته 1' },
    { key: 'week3', text: 'هفته 3', value: 'هفته 3' },
    { key: 'week6', text: 'هفته 6', value: 'هفته 6' },
    { key: 'month3', text: 'ماه 3', value: 'ماه 3' },
    { key: 'month6', text: 'ماه 6', value: 'ماه 6' },
    { key: 'month12', text: 'ماه 12', value: 'ماه 12' }, 
    { key: 'month24', text: 'ماه 24', value: 'ماه 24' },
]
const KSS1 = [
    { key: 'week1', text: 'هفته 1', value: 'هفته 1' },
    { key: 'week3', text: 'هفته 3', value: 'هفته 3' },
    { key: 'week6', text: 'هفته 6', value: 'هفته 6' },
    { key: 'month3', text: 'ماه 3', value: 'ماه 3' },
    { key: 'month6', text: 'ماه 6', value: 'ماه 6' },
    { key: 'month12', text: 'ماه 12', value: 'ماه 12' }, 
    { key: 'month24', text: 'ماه 24', value: 'ماه 24' },
]
const WOMAC = [
    { key: 'week1', text: 'هفته 1', value: 'هفته 1' },
    { key: 'week3', text: 'هفته 3', value: 'هفته 3' },
    { key: 'week6', text: 'هفته 6', value: 'هفته 6' },
    { key: 'month3', text: 'ماه 3', value: 'ماه 3' },
    { key: 'month6', text: 'ماه 6', value: 'ماه 6' },
    { key: 'month12', text: 'ماه 12', value: 'ماه 12' }, 
    { key: 'month24', text: 'ماه 24', value: 'ماه 24' },
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
                label='زخم'
                options={wound}
                />
                 <Form.Select
                fluid
                label='عوارض Range of Motion (ROM)  A'
                options={ROMComplications}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='Post op scores  '
                options={postOpScores}
                />
                 <Form.Select
                fluid
                label='Knee Injury and Osteoarthritis Outcome Score (KOOS)'
                options={KOOS}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Knee Society Score (KSS-1)'
                options={KSS1}
                />
                 <Form.Select
                fluid
                label='Western Ontario and McMaster Universities Arthritis Index'
                options={WOMAC}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='علت رویزن'
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
                <label>هماتوکریت قبل از عمل</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="preoperativeHematocrit"
                    value={patientInformation.preoperativeHematocrit || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>هموگلوبین قبل از عمل</label>
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
                <label>WBC قبل عمل</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="preoperativeWBC"
                    value={patientInformation.preoperativeWBC || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>پلاکت قبل عمل</label>
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