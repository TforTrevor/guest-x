import { trigger, transition, style, animate } from '@angular/animations';

export const rootURL = "http://192.168.2.77:8080/";

export function removeFromArray(item: any, array: any[]) 
{
    array.splice(array.indexOf(item, 0), 1);
}

export function getRootURL() 
{
    return 'temp';
}

export const fadeInOut = trigger('fadeInOut', [
    transition(':leave', [
        style({ opacity: '1' }),
        animate('.4s ease-out', style({ opacity: '0', height: '0px', paddingTop: '0px', paddingBottom: '0px' })),
    ]),
    transition(':enter', [
        style({ opacity: '0', height: '0px', paddingTop: '0px', paddingBottom: '0px' }),
        animate('.4s ease-out', style({ opacity: '1', height: '48px', paddingTop: '10px', paddingBottom: '10px' })),
    ])
]);

export function deleteEmtpyValues(object: Object)
{
    for (let property in object)
    {
        if (object[property] == null || object[property] == "")
        {
            delete object[property];
        }
    }
}