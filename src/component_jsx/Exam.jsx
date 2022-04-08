import React, { Component } from "react";
import { Form, Radio } from 'antd-mobile'

const RadioGroup = Radio.Group
const FormItem = Form.Item

export default class Exam extends Component {
  render() {
    const arr = Array.from(new Array(100), (_, i) => i)
    return (
      <Form>
        {
          arr.map(itme => {
            return (
              <FormItem label="啊科技时代金卡还记得啥叫宽松的环境卡号">
                <RadioGroup>
                  <Radio>
                    123
                  </Radio>
                </RadioGroup>
              </FormItem>
            )
          })
        }
      </Form>
    );
  }
}
