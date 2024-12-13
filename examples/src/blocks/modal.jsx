import React from 'react';
import { View, Text, Modal, Button } from "luminus-daisy"

export default function ModalBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md  prose prose-slate">
        <Text render="h3">Modal</Text>
        <View className="flex gap-2">
          <Button className='btn-primary' linkToModal="modal1">Open modal</Button>
          <Button className='btn-secondary' linkToModal="modal1">Open modal</Button>
          <Button className='btn-accent' linkToModal="modal1">Open modal</Button>
        </View>
        <Modal id="modal1">
          <View>
            <Text render="h3">My modal</Text>
            <Text render="p">This is my modal</Text>
          </View>
        </Modal>
    </View>
  );
}

