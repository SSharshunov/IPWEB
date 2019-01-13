import React from 'react'
import { connect } from 'react-redux'
import {
    Input,
    Button,
    Dropdown,
    Label,
    Message,
    Segment,
    Checkbox
} from 'semantic-ui-react'
import Form from "react-jsonschema-form"
import { getAwbOpts, setAwbOpts } from '../actions/rpcActions'


const schema = require('../json/awbSchema.json');;
const log = (type) => console.log.bind(console, type);

const CustomTitleField = ({id, title, required}) => {
    const legend = required ? title + '*' : title;
    return <div id="custom">xxxxxxxxxxxxxx{legend}</div>;
};

const CustomDescriptionField = ({id, description}) => {
    return description!==undefined ? <Label color='teal' attached='bottom right'>{description}</Label> : null
};

function CustomFieldTemplate(props) {
    return (
        <div>
            {props.children!==undefined ? props.children : null}


            {props.rawErrors!==undefined ? <Label basic color='red' pointing>{props.rawErrors.map(value=>`${value}! `)}</Label> : null}
            {props.help}
        </div>
    );
}

function ObjectFieldTemplate({ TitleField, properties, title, description }) {
    return (
        <div>
            {title!==undefined ? <Label color='teal' ribbon>{title}</Label> : null}
            <Segment.Group>
                {properties.map(prop => (
                    <Segment key={prop.name}>{prop.content}</Segment>
                ))}
            </Segment.Group>
        </div>
    );
}
export const chunkArray = (myArray, chunk_size) => {
    var results = [];
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    return results;
}

function ArrayFieldTemplate(props) {
    return (<div>
        {props.title!==undefined ? <Label color='grey' ribbon>{props.title}</Label> : null}
        <Segment.Group key={props.idSchema.id}>
        {[chunkArray(props.items, 4).map((array, index1) => {
            return <Segment.Group horizontal key={`${props.idSchema.id}_${index1}`}>
            {array.map((element, index) => {
                return (<Segment key={index}>
                    {element.children}
                </Segment>)
            })}
            </Segment.Group>
        })]}
    </Segment.Group></div>);
}

const CustomCheckbox = function(props) {
    const {id, label,required} = props;
    return (<div>
        <Checkbox id={id} toggle checked={props.value}
        // label={label}
        label={props.schema.help}
        //value={!props.value}
        onChange={(event) => props.onChange(!props.value)}/>
        {label!==undefined ? <Label basic color='teal' pointing='left'>{label}{required ? "*" : null}</Label> : null}
        </div>
    );
};

const IntegerCustomWidget = (props) => {
    return (
        <div>
            {props.label===undefined ? <Input label={{ basic: true,content: props.schema.help }} onChange={(event, data) => {
            // console.log(data)
            props.onChange(data.value)}
        } labelPosition='right' type='text' placeholder='0' size="mini" value={props.value}/> : null}
            {props.label!==undefined ? <Input labelPosition='right' type='text' placeholder='0' onChange={(event, data) => {
            // console.log(data)
            props.onChange(data.value)}
        } size="mini" value={props.value}>
                <Label basic>{props.schema.help}</Label>
                <input />
                <Label horizontal color='teal' >{props.label}{props.required ? "*" : null}</Label>
            </Input> : null}
        </div>
    );
};

const CustomSelect = function(props) {
    const opt = props.options.enumOptions.map((element, index) => ({
        key: index, text: element.value, value: element.value
    }))
    return (<div>
        <Dropdown defaultValue={props.value} id={props.id} placeholder={props.value}  selection options={opt} key={props.id}
        onChange={(event, data) => {
            // console.log(data)
            props.onChange(data.value)}
        }
        />

        {props.label!==undefined ? <Label basic color='teal' pointing='left'>{props.label}{props.required ? "*" : null}</Label> : null}
        </div>
    );
};

const fields = {
    TitleField: CustomTitleField,
    DescriptionField: CustomDescriptionField,

};

const widgets = {
    CheckboxWidget: CustomCheckbox,
    TextWidget: IntegerCustomWidget,
    SelectWidget: CustomSelect
};

function ErrorListTemplate(props) {
    const {errors} = props;
    const list = errors.map(error => (
        error.stack
    ))
    return (
        <Message
            error
            header='There was some errors with your submission'
            list={list}
        />
    );
}

let Awb = (props) => {
    if ((props.rpc.loading !== true) && (props.rpc.need_update === true)) {
        props.dispatch(getAwbOpts())
    }

    return <div>
        <Form
            className="ui form"
            schema={schema}
            fluid
            FieldTemplate={CustomFieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
            ArrayFieldTemplate={ArrayFieldTemplate}
            fields={fields}
            widgets={widgets}
            showErrorList={false}
            ErrorList={ErrorListTemplate}
            formData={props.rpc.awb}
            onChange={log("changed")}
            onSubmit={
                (values, dispatch) => {
                    props.dispatch(setAwbOpts([JSON.stringify(values.formData)]))
                }
            }
            onError={log("errors")} >
            <div>
                <Button type="submit" positive>Submit</Button>
                <Button type="button" negative>Cancel</Button>
            </div>
        </Form>
    </div>
}

const mapStateToProps = (state) => ({
    getAwbOpts,
    setAwbOpts,
    rpc: state.rpc
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Awb)