import { required, mustBeNumber, minValue, composeValidators, maxValue } from './functions';
import { TELESCOPES, CAMERAS, BANDS } from '../utils/params';

export const initialValues = {
  object: 'point',
  telescope: 'cassegrain',
  reducer: '1',
  ccd: 'iXon897',
  binning: '1',
  filter: 'B',
  transparency: '',
  airmass: '',
  skyBrightness: '19',
  seeing: '',
  aperture: '',
  magnitude: '',
  signalToNoise: ''
};

export const formFields = [
  {
    name: 'object',
    component: 'select',
    label: 'Object:',
    options: [
      { value: 'point', label: 'Point' },
      { value: 'extended', label: 'Extended' }
    ]
  },
  {
    name: 'telescope',
    component: 'select',
    label: 'Telescope:',
    options: [
      ...Object.entries(TELESCOPES)
        .filter(([key, value]) => value.active)
        .map(([key, value]) => ({ value: key, label: value.label })),
      { value: 'custom', label: 'Custom telescope' }
    ],
    customInputs: [
      {
        name: 'customTelescopeDiameter',
        component: 'input',
        label: 'Diameter (m):',
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customTelescopeFocalLength',
        component: 'input',
        label: 'Focal length (m):',
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customTelescopeEffectiveArea',
        component: 'input',
        label: 'Effective area of main mirror (%):',
        validation: composeValidators(required, mustBeNumber, minValue(0))
      }
    ]
  },
  {
    name: 'reducer',
    component: 'select',
    label: 'Reducer:',
    options: [
      { value: '1', label: 'None' },
      { value: '0.64', label: '0.64x' },
      { value: '0.5', label: '0.5x' },
      { value: 'custom', label: 'Custom reducer' }
    ],
    customInputs: [
      {
        name: 'customReducer',
        component: 'input',
        label: 'Custom reducer:',
        validation: composeValidators(required, mustBeNumber, minValue(0))
      }
    ]
  },
  {
    name: 'ccd',
    component: 'select',
    label: 'CCD:',
    options: [
      ...Object.entries(CAMERAS)
        .filter(([key, value]) => value.active)
        .map(([key, value]) => ({ value: key, label: value.label })),
      { value: 'custom', label: 'Custom CCD' }
    ],
    customInputs: [
      {
        name: 'customReadOutNoise',
        component: 'input',
        label: <>Read-out noise (e<sup>-</sup>/pix):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customDarkCurrent',
        component: 'input',
        label: <>Dark current (e<sup>-</sup>/s/pix):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customPixelSize',
        component: 'input',
        label: <>Pixel size (&#181;m):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customQuantumEfficiency',
        component: 'input',
        label: 'Quantum efficiency (%):',
        validation: composeValidators(required, mustBeNumber, minValue(0), maxValue(100))
      }
    ]
  },
  {
    name: 'binning',
    component: 'select',
    label: 'CCD binning:',
    options: [
      { value: '1', label: '1x1' },
      { value: '2', label: '2x2' },
      { value: '3', label: '3x3' },
      { value: '4', label: '4x4' },
      { value: '5', label: '5x5' },
      { value: 'custom', label: 'Custom binning' }
    ],
    customInputs: [
      {
        name: 'customBinning',
        component: 'input',
        label: 'Custom binning:',
        validation: composeValidators(required, mustBeNumber, minValue(0))
      }
    ]
  },
  {
    name: 'filter',
    component: 'select',
    label: 'Band:',
    options: [
      ...Object.entries(BANDS)
        .filter(([key, value]) => value.active)
        .map(([key, value]) => ({ value: key, label: value.label })),
      { value: 'custom', label: 'Custom band' }
    ],
    customInputs: [
      {
        name: 'customWavelength',
        component: 'input',
        label: <>Mean wavelength (&#8491;):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customBandwidth',
        component: 'input',
        label: <>Bandwidth (&#8491;):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customFlux',
        component: 'input',
        label: <>Zero magnitude flux (photon/s/cm<sup>2</sup>/&#8491;):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      },
      {
        name: 'customExtinctionCoefficient',
        component: 'input',
        label: <>Extinction coefficient (mag/airmass):</>,
        validation: composeValidators(required, mustBeNumber, minValue(0))
      }
    ]
  },
  {
    name: 'transparency',
    component: 'input',
    label: 'Total transparency on all optical elements:',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'airmass',
    component: 'input',
    label: 'Airmass:',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'skyBrightness',
    component: 'input',
    label: <>Sky brightness (mag/arcsec<sup>2</sup>):</>,
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'seeing',
    component: 'input',
    label: 'Seeing (FWHM in arcsec):',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'aperture',
    component: 'input',
    label: 'Radius for photometry (arcsec):',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'magnitude',
    component: 'input',
    label: 'Magnitude:',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  },
  {
    name: 'signalToNoise',
    component: 'input',
    label: 'S/N ratio:',
    validation: composeValidators(required, mustBeNumber, minValue(0))
  }
];

export const getLabelFromValue = (formFieldOptions, value) => {
  return formFieldOptions.find(option => option.value === value.toString()).label;
};
