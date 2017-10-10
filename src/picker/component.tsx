import * as React from 'react';
import styled from 'styled-components';





const itemHeight = 40;

const Style = styled.div`

    width: 150px;
    margin: 0 0 0 30px;
    &:first-child {
        margin: 0;
    }

    > form > ul {

        height: 150px;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        border-radius: 5px;
        border: 1px solid #ccc;

        // li {

        // 	border-top: 1px solid #ccc;
        // 	&:first-child {
        // 		border: none;
        // 	}
        // }
    }

    > h2 {

        margin: 0 0 10px 0;
    }

    label {

        display: block;
        .size(100%, itemHeight);
        margin: 0;

        input {

            // Hide the default widget.
            // Opacity makes it tabbable & arrowable.
            opacity: 0;
            width: 0;
            height: 0;
            margin: 0;
        }

        .background {

            display: block;
            height: itemHeight;
            overflow: hidden;

            .title {
                // This convoluted height-setting is because the span will grow with
                // a transform when selected, and would cover clickable area of
                // neighbours otherwise.
                display: block;
                height: itemHeight / 2;
                line-height: itemHeight / 2;
                margin-top: itemHeight / 4;

                text-align: center;
                .text-outline(white, 2px);

                transition: all .2s;
            }
        }

        input:checked + .background {

            background: @accent-color-primary;

            & > .title {

                font-weight: bolder;

                // Note: Transition + transform f*cks up overflow: hidden with rounded corners.
                // https://groups.google.com/a/chromium.org/forum/#!topic/graphics-dev/OSHUzdGV-_k
                // I can live with that because, yummy.
                transform: scale(1.5);
                transition: all .1s;
            }
        }
    }

    &.color {

        input:checked + .background {

            background: transparent;

            .title {

                color: @accent-color-primary;
            }
        }
    }

    &.font-family {

        input:checked + .background .title {

            font-weight: normal;
        }
    }

    &.size {

        input:checked + .background .title {

            transform: scale(1);
        }
    }
`;




interface Option {
    title: string;
    style: React.CSSProperties;
    value: string;
}

interface PickerItemProps extends Option {
    onChange: (_: string)=>void;
}

const PickerItem = ({title, style, value, onChange}: PickerItemProps) =>
    <li style={style}>
        <label>
            <input type='radio' name='dont_remove_this_attribute' onChange={e => e.currentTarget.checked ? onChange(value) : undefined} />
            <span className='background'><span className='title'>{title}</span></span>
        </label>
    </li>;

interface PickerProps {
    title: string;
    options: Array<Option>;
    onChange: (_: string)=>void;
}

export const Picker = ({title, options, onChange}: PickerProps) =>
    <Style className='picker'>
        <h2>{title}</h2>
        <form>
            <ul>
                {options
                    .map(option => <PickerItem {...option} onChange={onChange} />)}
            </ul>
        </form>
    </Style>;
