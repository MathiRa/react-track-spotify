import styled from "styled-components"

export const SearchWrapper = styled.div`
    padding: 10px;
    width: 70%;
    margin: 0 auto;
    .MuiFormControl-root {
        margin-top: 30px;
        width: 75%;
    }
    .MuiList-root {
        width: calc(100% - 32px);
        padding: 10px;
        .no-result {
           color: rgba(0,0,0,0.65)
        }
        li {
            &:not(.no-result) {
                cursor: pointer;
            }    
            .MuiListItemText-primary{ 
                font-size: 0.85rem;
            }
            .MuiListItemText-secondary span{
                font-size: 0.8rem;
            }
            &.MuiDivider-root {
                width: 67%;
            }
        }
        .MuiButton-contained {
            margin-top: 40px;
            margin-left: 20px;
            background-color: #18d860;
            svg {
                margin-left: 5px;
            }
            &:hover {
                background-color: #07963e;
            }
        }
    }
    &.search {
        display: inline-flex;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        align-items: end;
        img {
            width: 15%;
            height: 15%;            
            position: relative;
            margin-left: 20px;
            margin-bottom: 5px;
        }
    }
`