import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {

    return(
        <div>
            <Sparklines svgHeight={120} svgWidth={180}  data={props.data}>
                <SparklinesReferenceLine type='avg' />
                <SparklinesLine color={props.color} />
            </Sparklines>
            <div>
                {`${average(props.data)}   ${props.units}`}
            </div>
        </div>
    );
};
