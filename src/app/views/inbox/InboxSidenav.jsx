import React from 'react'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Icon,
    Button,
} from '@material-ui/core'
import InboxComposeDialog from './InboxComposeDialog'

const InboxSidenav = () => {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="mr-4 bg-default">
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                className="py-2 bg-error w-full"
            >
                Написать
            </Button>
            <ListItem button>
                <ListItemIcon>
                    <Icon>inbox</Icon>
                </ListItemIcon>
                <ListItemText primary="Входящие" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Icon>folder_special</Icon>
                </ListItemIcon>
                <ListItemText primary="Избранные" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Icon>send</Icon>
                </ListItemIcon>
                <ListItemText primary="Отправленные" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Icon>error</Icon>
                </ListItemIcon>
                <ListItemText primary="Спам" />
            </ListItem>

            <InboxComposeDialog open={open} handleClose={handleClose} />
        </div>
    )
}

export default InboxSidenav
