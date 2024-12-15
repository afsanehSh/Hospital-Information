import React, { useEffect, useState } from 'react';
import { Form, Input } from "semantic-ui-react";
  import { actionCreators } from "../../../store/PatientsFiles";
  import { useSelector, useDispatch } from 'react-redux';
  import { patientsFilesModel } from '../../../models/patientsFilesModel';

const tourniquet = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const pattelarFacetectomy = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const lateralRetinacularRelease = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const pattelarResurfacing = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const posteriorCapsuleRelease = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const reductionOsteotomy = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const dren = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const bloodInjection = [
    { key: 'yes', text: 'بلی', value: 'بلی' },
    { key: 'no', text: 'خیر', value: 'خیر' },
]

const InformationDuringSurgery = (props) => {

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
                label='تورنیکه'
                options={tourniquet}
                />
                <Form.Field>
                <label>فشار تورنیکه</label>
                <Input
                    type="text"
                    name="tournamentPressure"
                    value={patientInformation.tournamentPressure || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Incision</label>
                <Input
                    type="text"
                    name="incision"
                    value={patientInformation.incision || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Approach</label>
                <Input
                    type="text"
                    name="approach"
                    value={patientInformation.approach || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>گاید فمورال</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralGuide"
                    value={patientInformation.femoralGuide || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>فیکساسیون فمورال</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralFixation"
                    value={patientInformation.femoralFixation || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>برند و نوع فمورال</label>
                <Input
                    type="text"
                    name="brandAndTypeFemur"
                    value={patientInformation.brandAndTypeFemur || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>سایز فمورال</label>
                <Input
                    type="text"
                    name="femoralSize"
                    value={patientInformation.femoralSize || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Femoral external rotation</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralExternalRotation"
                    value={patientInformation.femoralExternalRotation || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Femoral values correction angle</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralValuesCorrectionAngle"
                    value={patientInformation.femoralValuesCorrectionAngle || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Femoral distal cut (lateral)</label>
                <Input
                    type="text"
                    name="femoralDistalCutLateral"
                    value={patientInformation.femoralDistalCutLateral || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Femoral posterior cut (medial)</label>
                <Input
                    type="text"
                    name="femoralPosteriorCutMedial"
                    value={patientInformation.femoralPosteriorCutMedial || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Femoral anterior cut</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralAnteriorCut"
                    value={patientInformation.femoralAnteriorCut || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Femoral defect</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralDefect"
                    value={patientInformation.femoralDefect || ''}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Femoral defect managment</label>
                <Input
                    type="text"
                    name="femoralDefectManagment"
                    value={patientInformation.femoralDefectManagment || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>گاید تیبیال</label>
                <Input
                    type="text"
                    name="tibialGuide"
                    value={patientInformation.tibialGuide || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>فیسکاسیون تیبیال</label>
                <Input
                    type="text"
                    name="tibialFixation"
                    value={patientInformation.tibialFixation || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>برند و نوع تیبیال</label>
                <Input
                    type="text"
                    name="brandAndTypeOfTibial"
                    value={patientInformation.brandAndTypeOfTibial || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>سایز تیبیال</label>
                <Input
                    type="text"
                    name="tibialSize"
                    value={patientInformation.tibialSize || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>اسلوپ تیبیال</label>
                <Input
                    type="text"
                    name="tibialSlope"
                    value={patientInformation.tibialSlope || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Proximal tibial cut (medial)</label>
                <Input
                    type="text"
                    name="proximalTibialCutMedial"
                    value={patientInformation.proximalTibialCutMedial || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Proximal tibial cut (lateral)</label>
                <Input
                    type="text"
                    name="proximalTibialCutLateral"
                    value={patientInformation.proximalTibialCutLateral || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Tibial defect</label>
                <Input
                    type="text"
                    name="tibialDefect"
                    value={patientInformation.tibialDefect || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Tibial defect managment</label>
                <Input
                    type="text"
                    name="tibialDefectManagment"
                    value={patientInformation.tibialDefectManagment || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Pattelar resurfacing'
                options={pattelarResurfacing}
                />
                <Form.Select
                fluid
                label='Pattelar facetectomy'
                options={pattelarFacetectomy}
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Lateral retinacular release'
                options={lateralRetinacularRelease}
                />
                <Form.Field>
                <label>Poly type</label>
                <Input
                    type="text"
                    name="polyType"
                    value={patientInformation.polyType || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>Poly brand</label>
                <Input
                    type="text"
                    name="polyBrand"
                    value={patientInformation.polyBrand || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Poly size</label>
                <Input
                    type="text"
                    name="polySize"
                    value={patientInformation.polySize || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>استم فمور </label>
                <Input
                    type="text"
                    name="stemFemor"
                    value={patientInformation.stemFemor || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>استم تیبیا </label>
                <Input
                    type="text"
                    name="stemTibial"
                    value={patientInformation.stemTibial || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='رلیز کپسول خلفی'
                options={posteriorCapsuleRelease}
                />
               <Form.Field>
                <label>رلیز مدیال </label>
                <Input
                    type="text"
                    name="medialRelease"
                    value={patientInformation.medialRelease || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Field>
                <label>رلیز لترال </label>
                <Input
                    type="text"
                    name="lateralRelease"
                    value={patientInformation.lateralRelease || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Pie crust</label>
                <Input
                    type="text"
                    name="pieCrust"
                    value={patientInformation.pieCrust || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='Reduction osteotomy'
                options={reductionOsteotomy}
                />
               <Form.Field>
                <label>Cemented or non cemented </label>
                <Input
                    type="text"
                    name="medialRelease"
                    value={patientInformation.medialRelease || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='درن'
                options={dren}
                />
               <Form.Field>
                <label>آنتی کواگولان در بخش</label>
                <Input
                    type="text"
                    name="anticoagulantsInWard"
                    value={patientInformation.anticoagulantsInWard || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Select
                fluid
                label='تزریق خون'
                options={bloodInjection}
                />
               <Form.Field>
                <label>مدت زمان بستری</label>
                <Input
                    type="text"
                    name="DurationHospitalization"
                    value={patientInformation.DurationHospitalization || ''}
                    onChange={handleChange}
                />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}

export default InformationDuringSurgery;