import {
  Divider,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/joy';
import Autocomplete from '@mui/joy/Autocomplete';
import { FormikValues, useFormik } from 'formik';
import { labels, languages } from '../utils/constants';

type FiltersProps = {
  setSearchQuery: (query: string) => void;
};

export default function Filters({ setSearchQuery }: FiltersProps): JSX.Element {
  const formik = useFormik({
    initialValues: {
      languages: [] as string[],
      labels: [] as string[],
      unassigned: false,
      state: 'all',
    },
    onSubmit: values => {
      applyFilters(values);
    },
  });

  const applyFilters = (values: FormikValues) => {
    let query = '';
    if (values.languages.length > 0) {
      query += ` language:${values.languages.join(',')}`;
    }
    if (values.labels.length > 0) {
      query += ` label:${values.labels.join(',')}`;
    }
    if (values.unassigned) {
      query += ` no:assignee`;
    }
    if (values.state !== 'all') {
      query += ` state:${values.state}`;
    }

    const queryString = 'is:issue is:open' + query;
    setSearchQuery(queryString);
  };

  return (
    <div className="relative overflow-hidden mx-auto lg:ml-2 p-6 lg:h-[88%] lg:fixed w-[98%] lg:w-[350px]  border-2 border-purple-400 rounded-lg dark:bg-dark dark:text-light">
      <p className="text-2xl mb-4">Filters</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <FormLabel
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            marginBottom: '0.2rem',
          }}
          className="dark:text-gray-300"
          htmlFor="tags-default"
        >
          Filter by language
        </FormLabel>
        <Autocomplete
          sx={{
            marginBottom: '1rem',
          }}
          multiple
          name="language"
          id="tags-default"
          placeholder="Filter by language"
          options={languages}
          getOptionLabel={option => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, value) => {
            const values = value.map(v => v.value);
            formik.setFieldValue('languages', values);
          }}
        />
        <FormLabel
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            marginBottom: '0.2rem',
          }}
          className="dark:text-gray-300"
          htmlFor="tags-default"
        >
          Filter by label
        </FormLabel>
        <Autocomplete
          sx={{
            marginBottom: '1rem',
          }}
          multiple
          name="labels"
          id="tags-default"
          placeholder="Filter by label"
          options={labels}
          getOptionLabel={option => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, value) => {
            const values = value.map(v => v.value);
            formik.setFieldValue('labels', values);
          }}
        />

        <Typography
          sx={{
            marginBottom: '1rem',
          }}
          className="dark:text-gray-300"
          endDecorator={
            <Switch
              onChange={e => {
                formik.setFieldValue('unassigned', e.target.checked);
              }}
              sx={{
                ml: 1,
              }}
            />
          }
        >
          Show only unassigned issues
        </Typography>

        <FormLabel
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            marginBottom: '0.2rem',
          }}
          className="dark:text-gray-300"
          htmlFor="tags-default"
        >
          State
        </FormLabel>
        <RadioGroup
          defaultValue="all"
          name="state"
          orientation="horizontal"
          sx={{
            marginBottom: '1rem',
          }}
          onChange={e => {
            formik.setFieldValue('state', e.target.value);
          }}
        >
          <Radio
            className="dark:text-gray-300"
            value="all"
            label="All"
            variant="outlined"
          />
          <Radio
            className="dark:text-gray-300"
            value="open"
            label="Open"
            variant="outlined"
          />
          <Radio
            className="dark:text-gray-300"
            value="closed"
            label="Closed"
            variant="outlined"
          />
        </RadioGroup>
        <button
          type="submit"
          className="bg-purple-400 text-white rounded-md p-2 mt-2"
        >
          Apply Filters
        </button>
      </form>
      <Divider sx={{ my: 2 }} />

      <div className="absolute bottom-0 p-2 text-gray-500">
        Made with ❤️ by{' '}
        <a className="text-purple-600 hover:text-purple-500" href="">
          Newton Fernandis
        </a>
      </div>
    </div>
  );
}
