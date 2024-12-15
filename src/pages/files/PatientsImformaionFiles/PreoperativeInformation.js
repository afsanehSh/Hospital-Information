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
    { key: 's', text: 'سفازولین', value: 'سفازولین' },
    { key: 'k', text: 'کلیندامایسین', value: 'کلیندامایسین' },
    { key: 'si', text: 'سیپروفلوکساسین', value: 'سیپروفلوکساسین' },
    { key: 'v', text: 'ونکومایسین', value: 'ونکومایسین' },
]

const historyOfInjection = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const trust = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const surgicalSide = [
    { key: 'right', text: 'راست', value: 'راست' },
    { key: 'left', text: 'چپ', value: 'چپ' },
    { key: 'twoSide', text: 'دوطرفه', value: 'دوطرفه' },
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
                <label>داروهای دریافتی بیمار</label>
                <Input
                    type="text"
                    name="medicationsReceived"
                    value={patientInformation.medicationsReceived || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>بیماری های قبلی بیمار</label>
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
                <label>سابقه ی جراحی های بیمار</label>
                <Input
                    type="text"
                    name="historyOfSurgeries"
                    value={patientInformation.historyOfSurgeries || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>سابقه ی حساسیت های بیمار</label>
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
                <label>سابقه ی مصرف سیگار</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="historyOfSmoking"
                    value={patientInformation.historyOfSmoking || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>سابقه ی مصرف الکل</label>
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
                <label>سابقه ی مصرف موارد مخدر</label>
                <Input
                    type="text"
                    name="drugUseHistory"
                    value={patientInformation.drugUseHistory || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>تشخیص اولیه</label>
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
                <label>علائم</label>
                <Input
                    type="text"
                    name="signs"
                    value={patientInformation.signs || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>فعالیت فیزیکی ASA</label>
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
                label='آنتی بیوتیک قبل عمل'
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
                options={historyOfInjection}
                value={patientInformation.historyOfInjection || ''}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Select
                fluid
                label='Trust'
                options={trust}
                onChange={handleChange}
                />
                <Form.Select
                fluid
                label='سمت جراحی'
                options={surgicalSide}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>محور میکانیکی</label>
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
                <label>زاویه alfa</label>
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
                <label>نوع جراحی </label>
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
                <label>هماتوکریت قبل از عمل</label>
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
                <label>هموگلوبین قبل از عمل</label>
                <Input
                    type="text"
                    name="preoperativeHemoglobin"
                    value={patientInformation.preoperativeHemoglobin || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>WBC قبل عمل</label>
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
                <label>پلاکت قبل عمل</label>
                <Input
                    type="text"
                    name="plateletsBeforeSurgery"
                    value={patientInformation.plateletsBeforeSurgery || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>پزشک جراح</label>
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
                <label>کمک جراح</label>
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
