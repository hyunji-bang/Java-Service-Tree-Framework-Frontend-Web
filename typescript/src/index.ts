import {testMakePerson} from "./utils/makePerson";
import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";

import * as R from 'ramda';

let persons: IPerson[] = R.range(0, 5)
    .map((n: number) => new Person("이동민", 99));

console.log(persons);


testMakePerson();