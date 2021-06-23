import Button from './ui/Button';
import Checkbox from './ui/Checkbox';
import Form from './ui/Form';
import FormCheckboxes from './ui/FormCheckboxes';
import FormInput from './ui/FormInput';
import FormTextarea from './ui/FormTextarea';
import Index from './ui/Index';
import IndexSearch from './ui/IndexSearch';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import BasePage from './pages/BasePage';

const plugin = {
    install(addComponent) {
        addComponent('ui-checkbox', Checkbox);
        addComponent('ui-form', Form);
        addComponent('ui-form-checkboxes', FormCheckboxes);
        addComponent('ui-form-input', FormInput);
        addComponent('ui-form-textarea', FormTextarea);
        addComponent('ui-index', Index);
        addComponent('ui-index-search', IndexSearch);
        addComponent('ui-input', Input);
        addComponent('ui-textarea', Textarea);
    },
};

const pages = { BasePage };

export { 
    plugin, 
    pages, 
    Button
};
