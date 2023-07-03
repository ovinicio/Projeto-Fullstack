import styled from 'styled-components';

export const MyButtom = styled.button`
    display: flex;
`

export const MyOrderForm = styled.form`

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: 3px solid #f3a334;
        border-radius: 15px;
        padding: 0.4vw 0 0.2vw 0;
        width: 100%;
        margin-top: 7px;

        button{
            background: lavender;
            box-shadow: 0cap.5px 1px 4px black;
            font-size: 1vw;
            font-weight: bold;
            color: blue;
            padding: 0.2vw 1vw 0.2vw 1vw;
            margin-left: 1vw;

            :active{
                background-color: lightgrey;
            }
        }

        label{
            font-size: 1vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 7px;
            margin-top: 7px;
        }

        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw;
            box-shadow: 1px 2px 5px;
        }
    }

    #select-product{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border: 3px solid #f3a334;
        border-radius: 15px;

        p{
            font-size: 1.2vw;
            font-weight: bold;
        }

        label{
            font-size: 1vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 7px;
            margin-top: 7px;
        }

        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw;
            box-shadow: 1px 2px 5px;
        }
    }

    #select-client{
        justify-content: center;
        align-items: center;

        label{
            margin-right: 0.5vw;
        }

        input{
            width: 50vw;
        }
    }

    #order {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;