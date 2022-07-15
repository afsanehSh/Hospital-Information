import React, { useEffect, useState } from 'react';
import { Form, Input } from "semantic-ui-react";
  import { actionCreators } from "../../../store/PatientsFiles";
  import { useSelector, useDispatch } from 'react-redux';
  import { patientsFilesModel } from '../../../models/patientsFilesModel';

const tourniquet = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const pattelarFacetectomy = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const lateralRetinacularRelease = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const pattelarResurfacing = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const posteriorCapsuleRelease = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const reductionOsteotomy = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const dren = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
]

const bloodInjection = [
    { key: 'yes', text: 'yes', value: 'yes' },
    { key: 'no', text: 'no', value: 'no' },
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
                label='tourniquet'
                options={tourniquet}
                />
                <Form.Field>
                <label>Tourniquet Pressure</label>
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
                <label>Femoral Guide</label>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="femoralGuide"
                    value={patientInformation.femoralGuide || ''}
                />
                </Form.Field>
                <Form.Field>
                <label>Femoral Fixation</label>
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
                <label>Brand And Type Femur</label>
                <Input
                    type="text"
                    name="brandAndTypeFemur"
                    value={patientInformation.brandAndTypeFemur || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Femoral Size</label>
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
                <label>Tibial Guide</label>
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
                <label>Tibial Fixation</label>
                <Input
                    type="text"
                    name="tibialFixation"
                    value={patientInformation.tibialFixation || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Brand And Type Of Tibial</label>
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
                <label>Tibial Size</label>
                <Input
                    type="text"
                    name="tibialSize"
                    value={patientInformation.tibialSize || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Tibial Slope</label>
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
                <label>Stem Femor</label>
                <Input
                    type="text"
                    name="stemFemor"
                    value={patientInformation.stemFemor || ''}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Stem Tibial</label>
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
                label='Posterior Capsule Release'
                options={posteriorCapsuleRelease}
                />
               <Form.Field>
                <label>Medial Release</label>
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
                <label>Lateral Release</label>
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
                label='Dren'
                options={dren}
                />
               <Form.Field>
                <label>Anticoagulants InWard</label>
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
                label='Duration Hospitalization'
                options={bloodInjection}
                />
               <Form.Field>
                <label>Duration Hospitalization</label>
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