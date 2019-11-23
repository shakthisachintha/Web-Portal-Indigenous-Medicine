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
            ],{ optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ],{ optional: true }),
            query(':leave', animateChild(),{ optional: true }),
            group([
                query(':leave', [
                    animate('900ms ease-out', style({ left: '100%' }))
                ],{ optional: true }),
                query(':enter', [
                    animate('600ms ease-out', style({ left: '0%' }))
                ],{ optional: true })
            ]),
            query(':enter', animateChild(),{ optional: true }),
        ])
    ]);