import React from 'react'
import {
    Avatar,
    Button,
    Card,
    Divider,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core'

const CustomerInfo = (props) => {
    const {
        userData
    } = props

    const customerInfo = [
        {
            title: 'Телефон',
            value: userData.phone,
        }
    ]

    return (
        <Card className="pt-6" elevation={3}>
            <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    // src="/assets/images/faces/10.jpg"
                />
                <h5 className="mt-4 mb-2">{`${userData.firstName} ${userData.lastName}`}</h5>
            </div>

            <Divider />
            <Table className="mb-4">
                <TableBody>
                    <TableRow>
                        <TableCell className="pl-4">Email</TableCell>
                        <TableCell>
                            <div>{userData.email}</div>
                            <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                                Подтвержденный email
                            </small>
                        </TableCell>
                    </TableRow>
                    {customerInfo.map((item, ind) => (
                        <TableRow key={ind}>
                            <TableCell className="pl-4">{item.title}</TableCell>
                            <TableCell>{item.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex-column items-start px-4">
                <Button className="mb-1" variant="text">
                    <Icon className="mr-2" fontSize="small">
                        lock_open
                    </Icon>{' '}
                    Сбросить или Сменить пароль
                </Button>

                <Button className="mb-1" variant="text">
                    <Icon className="mr-2" fontSize="small">
                        person
                    </Icon>{' '}
                    Войти как клиент
                </Button>

                <Button
                    className="mb-4 bg-error text-white"
                    variant="contained"
                >
                    <Icon className="mr-2" fontSize="small">
                        delete
                    </Icon>{' '}
                    Удалить аккаунт
                </Button>
            </div>
        </Card>
    )
}

export default CustomerInfo
