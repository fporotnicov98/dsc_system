import React, { useEffect, useState } from 'react'
import {
  Grid,
  Button,
  DialogTitle,
  DialogContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Icon
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { githubApi } from 'config'
import { myToken } from 'config'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

const ViewRun = observer((props) => {
  const {
    open,
    handleClose,
    userHandler,
    registerUser,
    userInfo
  } = props

  const [alerts, setAlerts] = useState([])
  const decodeFile = `
    import Mock from '../mock'
    import jwt from 'jsonwebtoken'

    const JWT_SECRET = 'jwt_secret_key'
    const JWT_VALIDITY = '7 days'

    const userList = [
  `

  const appfile = `
    const App = () => {
      const { stores } = configureStore();
    
      const [ENV_PROD] = ['PRODUCTION'];
      /* … */
      const environment = 'PRODUCTION';
      /* … */
      function isUserAdmin(user) {
        if (environmentǃ = ENV_PROD) {
          // bypass authZ checks in DEV
          return true;
        }
    
        /* … */
        return false;
      }
    
      return (
  `

  useEffect(() => {
    fetch(`${githubApi}/repos/fporotnicov98/dsc_system/code-scanning/alerts`, { method: 'GET', body: null, headers: { 'Authorization': `Bearer ${myToken}` } })
      .then(res => res.json())
      .then(data => {
        setAlerts(data)
      })
  }, [])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className="min-w-600"
    >
      <DialogTitle id="form-dialog-title">
        <div className="min-w-600">
          Отчет проверки безопасности
        </div>
      </DialogTitle>
      <DialogContent>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Vulnerability of UNICODE characters
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="flex-column">
              <span className="mb-3">src/app/App.js:39</span>
              <CodeMirror
                value={appfile}
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                  console.log('value:', value);
                }}
              />
              <div className="my-2">
              The “ǃ” character used is not an exclamation mark but an “ALVEOLAR CLICK” character. The following line therefore does not compare the variable environment to the string "PRODUCTION" but instead assigns the string "PRODUCTION" to the previously undefined variable environmentǃ
              </div>
              <Icon fontSize="small">open_in_new</Icon>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {
          alerts.map((alert, index) => {
            return (
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {alert.rule.description}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className="flex-column">
                    <span className="mb-3">src/fake-db/db/auth.js:4</span>
                    <CodeMirror
                      value={decodeFile}
                      theme={oneDark}
                      extensions={[javascript({ jsx: true })]}
                      onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                      }}
                    />
                    <div className="my-2">
                      Including unencrypted hard-coded authentication credentials in
                      source code is dangerous because the credentials may be easily discovered.
                      For example, the code may be open source, or it may be leaked or accidentally revealed,
                      making the credentials visible to an attacker.
                      This, in turn, might enable them to gain unauthorized access, or to obtain privileged information.
                    </div>
                    <Icon fontSize="small">open_in_new</Icon>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          })
        }
      </DialogContent>
    </Dialog>
  )
})

export default ViewRun
