import React from 'react';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import introStyle from "assets/jss/material-kit-react/views/introStyle.jsx";

class IntroSection extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      form_id: '',
      form: {},
      loading: false,
      success: false,
      error: false,
      consent: false,
      values: {}
    };

    this.handleConsentChange = this.handleConsentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleConsentChange(event) { this.setState({ consent: event.target.checked })};
  handleCheckboxChange(fieldId, event) { 
    let name = event.target.name
    let checked = event.target.checked
    this.setState(prevState => {
      let values = Object.assign({}, prevState.values)
      if (checked) {
        values[fieldId] = values[fieldId] + ';' + name
      } else {
        values[fieldId] = values[fieldId].replace((';' + name), '');
      }
      return { values }
    })
  };
  handleFieldChange = (fieldId, value) => {
    this.setState(prevState => {
      let values = Object.assign({}, prevState.values)
      values[fieldId] = value;
      return { values };
    });
  };

  handleSubmit = (e) => {
    if (e) e.preventDefault();

    this.setState({ loading: true });
    const { consent, values } = this.state;
    const fieldKeys = Object.keys(values)
    let fields = []
    fieldKeys.forEach(key => {
      fields.push({name: key, value: values[key]})
    })
    fields.push({
      name: 'LEGAL_CONSENT.subscription_type_8251125',
      value: consent
    })
    const isBrowser = typeof window !== 'undefined';
    const hutk = isBrowser ? Cookies.get('hubspotutk') : null;
    const pageUri = isBrowser ? window.location.href : null;
    const pageName = isBrowser ? document.title : null;
    const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/6989557/${this.props.data.form_id}`;
    const body = {
      submittedAt: Date.now(),
      fields: fields,
      context: {
        hutk,
        pageUri,
        pageName,
      },
      legalConsentOptions: {
        consent: { // Include this object when GDPR options are enabled
          consentToProcess: consent,
          text: "I agree to receive other communications from Carbonwave.",
          communications: [
            {
              value: consent,
              subscriptionTypeId: 8251125,
              text: "My personal information can be used to receive contact about Carbonwave products and services."
            }
          ]
        }
      }
    };
		
    fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      dataType: "json",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          loading: false,
          success: true,
          error: false,
          consent: false,
          email: '',
          values: {}
        });
        this.fetchForm()
      })
      .catch(err => {
        this.setState({
          success: true,
          error: true,
          loading: false
        });
      });
  }

  fetchForm() {
    const form = this.props.formData.find(el => el.node.guid === this.props.data.form_id);
    this.setState({ form: form })
    const upcomingPageData = form.node.formFieldGroups;
    this.setState(prevState => {
      const values = upcomingPageData.reduce((obj, fields) => {
        if (fields.fields.length > 1) {
          for (const subField of fields.fields) {
              obj[subField.name] = "";
          }
        } else {
            obj[fields.fields[0].name] = "";
        }

        return obj;
      }, {});

      return { values };
    });
  }

  componentDidMount() {
    this.fetchForm()
  }

  render() {
    const { classes, data } = this.props
    const { loading, success, error, form, values } = this.state;
    return (
      <Paper className={classes.posR} elevation={0}>
        <div className={`${classes.bgImage} ${classes.visibleDesktop}`} style={{ backgroundImage: `url("${data.background_image}")` }}></div>
        <div className={`${classes.bgImage} ${classes.visibleMobile}`} style={{ backgroundImage: `url("${data.mobile_background_image}")` }}></div>
        <div className={classes.smallContainer}>
          <GridContainer justifyContent="space-between">
            <GridItem xs={12} sm={12} md={5}>
              <AnimateIn type="slide">
                <h1 className={classes.smallTitle}>{data.heading}</h1>
                <p>{data.subheading}</p>
              </AnimateIn>
            </GridItem>
            <GridItem xs={12} sm={12} md={7} className={`${classes.marginTop40} ${classes.noMobileMargin}`}>
              <div id="form-container" className={classes.formContainer}></div>
              <React.Fragment>
              {form && form.node && 
                <form
                  disabled={loading}
                  onSubmit={this.handleSubmit}
                >
                  <GridContainer>
                    {form.node.formFieldGroups.map(object => {
                      const length = object.fields.length
                      return object.fields.map((field, key) => {
                        switch (field.fieldType) {
                          case "text":
                            {
                              return (
                              <GridItem key={key} xs={12} sm={12} md={length > 1 ? 6 : 12} className={classes.noMobileMargin}>
                                <CustomInput
                                  labelText={field.label}
                                  id={field.name}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    value: values[field.name] || '',
                                    onChange: (e) => {
                                      this.handleFieldChange(field.name, e.target.value);
                                    },
                                    required: field.required,
                                    type: (field.name === "email" ? "email" : field.fieldType)
                                  }}
                                />
                              </GridItem>
                            )}
                          case "checkbox":
                            return (
                              <GridItem key={key} xs={12} sm={12} md={length > 1 ? 6 : 12} className={classes.noMobileMargin}>
                                <FormControl component="fieldset" className={classes.marginBottom10}>
                                  <FormLabel component="legend" className={`${classes.formControlLabel} ${classes.marginBottom10}`}>{field.label}</FormLabel>
                                  <FormGroup row={true}>
                                  {field.options.map((checkbox_group_item, key) => (
                                    <FormControlLabel
                                      key={key}
                                      className={classes.formControlLabel}
                                      control={
                                        <Checkbox 
                                          className={classes.formControlCheckbox} 
                                          checked={values[field.name].search(checkbox_group_item.label) !== -1 ? true : false} 
                                          onChange={(e) => {
                                            this.handleCheckboxChange(field.name, e);
                                          }}
                                          name={checkbox_group_item.label} 
                                        />
                                      }
                                      label={checkbox_group_item.label}
                                    />
                                  ))}
                                  </FormGroup>
                                </FormControl>
                              </GridItem>
                            );
                          case "textarea":
                            return (
                              <GridItem key={key} xs={12} sm={12} md={length > 1 ? 6 : 12} className={classes.noMobileMargin}>
                                <CustomInput
                                  labelText={field.label}
                                  id={field.name}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    multiline: true,
                                    rows: 4,
                                    value: values[field.name],
                                    onChange: (e) => {
                                      this.handleFieldChange(field.name, e.target.value);
                                    },
                                    required: field.required,
                                  }}
                                />
                              </GridItem>
                            )
                          default:
                            return (
                              <GridItem key={key} xs={12} sm={12} md={length > 1 ? 6 : 12} className={classes.noMobileMargin}>
                                <CustomInput
                                  labelText={field.label}
                                  id={field.name}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    value: values[field.name],
                                    onChange: (e) => {
                                      this.handleFieldChange(field.name, e.target.value);
                                    },
                                    required: field.required
                                  }}
                                />
                              </GridItem>
                            );
                        }
                      })
                    })}
                    <GridItem xs={12} sm={12} md={12}>
                      <p className={classes.accentText}>{data.consent_desc}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} className={classes.noMobileMargin}>
                      <FormControlLabel
                        className={classes.formControlLabel}
                        control={<Checkbox className={classes.formControlCheckbox} checked={this.state.consent} onChange={this.handleConsentChange} name="consent-chk" />}
                        label={data.consent_msg}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} className={classes.noMobileMargin}>
                      <p className={classes.accentText}>{data.consent_desc_2}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} className={classes.noMobileMargin}>
                      <p className={classes.accentText}>{data.consent_desc_3}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} className={classes.marginTop20}>
                      <Button size="sm" color="primary" type="submit" disabled={loading} square>{data.send_btn_label}</Button>
                      {loading ? 
                        <span className={classes.formControlMessage}>Loading...</span>
                      : null
                      }
                      {success ? 
                        <>
                        { error
                          ? <span className={`${classes.warning} ${classes.formControlMessage}`}>{data.message_sent_error}</span>
                          : <span className={`${classes.success} ${classes.formControlMessage}`}>{data.message_sent_confirmation}</span>
                        }
                        </>
                      : null
                      }
                    </GridItem>
                  </GridContainer>
                </form>
              }
              </React.Fragment>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    );
  }
}

export default withStyles(IntroSection, introStyle);