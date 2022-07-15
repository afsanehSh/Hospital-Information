import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Message,
  Segment
} from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from "../../../store/PatientsFiles";
import { patientsFilesModel } from '../../../models/patientsFilesModel';

const preoperativeAntibiotics = [
    { key: 's', text: 'Cefazolin', value: 'Cefazolin' },
    { key: 'k', text: 'Clindamycin', value: 'Clindamycin' },
    { key: 'si', text: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { key: 'v', text: 'Vancomycin', value: 'Vancomycin' },
]

const yesNo = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const surgicalSide = [
    { key: 'right', text: 'right', value: 'right' },
    { key: 'left', text: 'left', value: 'left' },
    { key: 'twoSide', text: 'twoSide', value: 'twoSide' },
]

const PreoperativeInformation = (props) => {

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
                <Form.Field>
                <label>Medications Received</label>
                <Input
                    type="text"
                    name="medicationsReceived"
                    value={patientInformation.medicationsReceived || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Previous Diseases</label>
                <Input
                    type="text"
                    name="previousDiseases"
                    value={patientInformation.previousDiseases || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Field>
                <label>Surgeries History</label>
                <Input
                    type="text"
                    name="historyOfSurgeries"
                    value={patientInformation.historyOfSurgeries || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Allergies History</label>
                <Input
                    type="text"
                    name="historyOfAllergies"
                    value={patientInformation.historyOfAllergies || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Smoking History</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="historyOfSmoking"
                    value={patientInformation.historyOfSmoking || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Alcohol Consumption History</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="historyOfAlcoholConsumption"
                    value={patientInformation.historyOfAlcoholConsumption || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Drug Use History</label>
                <Input
                    type="text"
                    name="drugUseHistory"
                    value={patientInformation.drugUseHistory || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>First Recognition</label>
                <Input
                type="text"
                onChange={handleChange}
                name="firstRecognition"
                value={patientInformation.firstRecognition || ''}
                fluid
                />  
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Signs</label>
                <Input
                    type="text"
                    name="signs"
                    value={patientInformation.signs || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>ASA Physical Activity</label>
                <Input
                    type="text"
                    name="ASAPhysicalActivity"
                    value={patientInformation.ASAPhysicalActivity || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Knee Injury and Osteoarthritis Outcome Score (KOOS)</label>
                <Input
                    type="text"
                    name="KOOS"
                    value={patientInformation.KOOS || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Knee Society Score (KSS-1)</label>
                <Input
                    type="text"
                    name="KSS1"
                    value={patientInformation.KSS1 || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Knee Society Score (KSS-2)</label>
                <Input
                    type="text"
                    name="KSS2"
                    value={patientInformation.KSS2 || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Western Ontario and McMaster Universities Arthritis Index</label>
                <Input
                    type="text"
                    name="WOMAC"
                    value={patientInformation.WOMAC || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>36-Item Short Form Survey (SF-36) PCF</label>
                <Input
                    type="text"
                    name="PCF"
                    value={patientInformation.PCF || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Select
                fluid
                label='Preoperative Antibiotics'
                options={preoperativeAntibiotics}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>knee Skin</label>
                <Input
                    type="text"
                    name="kneeSkin"
                    value={patientInformation.kneeSkin || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Select
                fluid
                label='History Of Injection'
                options={yesNo}
                value={patientInformation.historyOfInjection || ''}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='Trust'
                options={yesNo}
                onChange={handleChange}
                />
                <Form.Select
                fluid
                label='Surgical Side'
                options={surgicalSide}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Mechanical Axis</label>
                <Input
                    type="text"
                    name="mechanicalAxis"
                    value={patientInformation.mechanicalAxis || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>lateral distal femoral angle (LDFA)</label>
                <Input
                    type="text"
                    name="LDFA"
                    value={patientInformation.LDFA || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>medial proximal tibial angle (MPTA)</label>
                <Input
                    type="text"
                    name="MPTA"
                    value={patientInformation.MPTA || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Alpha Angle</label>
                <Input
                    type="text"
                    name="alphaAngle"
                    value={patientInformation.alphaAngle || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Joint Conversion angle (JCA)</label>
                <Input
                    type="text"
                    name="JCA"
                    value={patientInformation.JCA || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Surgery Type</label>
                <Input
                    type="text"
                    name="surgeryType"
                    value={patientInformation.surgeryType || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>ROM</label>
                <Input
                    type="text"
                    name="ROM"
                    value={patientInformation.ROM || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Flexion contracture </label>
                <Input
                    type="text"
                    name="flexionContracture"
                    value={patientInformation.flexionContracture || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Xray</label>
                <Input
                    type="text"
                    name="Xray"
                    value={patientInformation.Xray || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Preoperative Hematocrit</label>
                <Input
                    type="text"
                    name="preoperativeHematocrit"
                    value={patientInformation.preoperativeHematocrit || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Preoperative Hemoglobin</label>
                <Input
                    type="text"
                    name="preoperativeHemoglobin"
                    value={patientInformation.preoperativeHemoglobin || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Preoperative WBC</label>
                <Input
                    type="text"
                    name="preoperativeWBC"
                    value={patientInformation.preoperativeWBC || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Platelets Before Surgery</label>
                <Input
                    type="text"
                    name="plateletsBeforeSurgery"
                    value={patientInformation.plateletsBeforeSurgery || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Surgeon</label>
                <Input
                    type="text"
                    name="surgeon"
                    value={patientInformation.surgeon || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Assistant Surgeon</label>
                <Input
                    type="text"
                    name="assistantSurgeon"
                    value={patientInformation.assistantSurgeon || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}

export default PreoperativeInformation;
