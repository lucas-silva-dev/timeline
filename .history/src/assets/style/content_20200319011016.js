import styled from 'styled-components'

export const TimeLineContainer = styled.div`
  position: relative;
  max-width: 550px;
  min-height: calc(100vh - 56px);
  margin: auto;
  border-left: 2px solid #d8d8d8;
  padding-top: 56px;
`

export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 465px;
  margin-left: -14px;
  margin-bottom: 36px;
  svg { margin-top: 10px; }
`

export const Card = styled.div`
  position: relative;
  width: 416px;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 20px #ccc;
  background-color: #fff;

  &::after {
    content: "";
    position: absolute;
    width: 0; 
    height: 0; 
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent; 
    border-right:10px solid #fff;
    top: 14px;
    left: -9px;
  }

  margin-left: auto;
`

export const CardHeader = styled.div`
  padding:  10px 21px 21px 22px;
`

export const Item = styled.li`
  display: flex;
  align-items: flex-end;

  svg { margin-right: 4px; }

  label { font-size: 14px; }
`

export const ListUnstyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardBody = styled.div`
  padding: 10px 21px 10px 22px;
  border-radius: 0 0 10px 10px;
  background-color: #f8f8f8;
`

export const Table = styled.table`
  width: 100%;

  thead { border-bottom: 2px solid #f3f3f3; }
`

export const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 2px solid #f3f3f3;

  &:last-child { border-bottom: none; }

  th { 
    font-weight: bold;
    margin-right: 10px; 
  }

  td { font-weight: normal; }
`