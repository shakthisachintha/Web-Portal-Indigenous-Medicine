import { trigger, transition, query, style, animate, animateChild, group } from '@angular/animations';
import { Optional } from '@angular/core';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('900ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('600ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);